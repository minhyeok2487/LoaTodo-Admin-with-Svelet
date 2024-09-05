<script>
    import { onMount } from 'svelte';
    import Table from '../../components/Table.svelte';    
    import { getCommentList } from '../../api/comment';
    import { formatDate } from '../../utils/dateFormat';

    let columns = ['ID', '이메일', '작성날짜', '내용'];
    let data = [];
    let currentPage = 1;
    let pageSize = 25;
    let totalPages = 0;
    let totalItems = 0;

    let searchEmail = '';

    async function fetchData(pageNumber) {
        try {
            const response = await getCommentList(pageNumber, pageSize, {
                username: searchEmail,
            });
            if (response && response.content) {
                data = response.content.map(member => ({
                    ID: member.commentId,
                    이메일: member.username,
                    작성날짜: formatDate(member.createdDate),
                    내용: member.body
                }));
                totalPages = response.totalPages;
                totalItems = response.totalElements;
                currentPage = pageNumber;
            }
        } catch (error) {
            console.error('Error fetching member list:', error);
        }
    }

    function handlePageChange(event) {
        fetchData(event.detail);
    }

    function handleSearch() {
        fetchData(1);
    }

    onMount(() => {
        fetchData(currentPage);
    });
</script>

<main>
    <h1>방명록 관리</h1>
    
    <div class="search-container">
        <input bind:value={searchEmail} placeholder="이메일 검색" />
        <button on:click={handleSearch}>검색</button>
    </div>

    <Table {columns} {data} {currentPage} {pageSize} {totalPages} {totalItems} on:pageChange={handlePageChange} />
</main>

<style>
    main {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }
    h1 {
        text-align: center;
        color: #343a40;
        margin-bottom: 10px;
    }
    .search-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 20px;
        gap: 10px;
    }
    .search-container input,
    .search-container .select-container {
        flex: 1;
    }
    .select-container {
        display: flex;
        flex-direction: column;
    }
    .select-container label {
        margin-bottom: 5px;
        font-size: 0.9em;
        color: #495057;
    }
    .search-container input,
    .search-container select {
        padding: 10px;
        border: 1px solid #ced4da;
        border-radius: 4px;
    }
    .search-container button {
        padding: 10px 15px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        font-size: 0.9em;
        white-space: nowrap;
    }
    .search-container button:hover {
        background-color: #218838;
    }

    @media (max-width: 768px) {
        .search-container {
            flex-direction: column;
            align-items: stretch;
        }
        .search-container input,
        .search-container .select-container,
        .search-container button {
            width: 100%;
        }
    }
</style>
