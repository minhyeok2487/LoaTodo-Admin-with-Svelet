<script>
    import { onMount } from 'svelte';
    import Table from '../../components/Table.svelte';    
    import { getMemberList } from '../../api/member';
    import { formatDate } from '../../utils/dateFormat';

    let columns = ['ID', '이메일', '대표캐릭터', '가입일', '가입방식', '등록여부'];
    let data = [];
    let currentPage = 1;
    let pageSize = 25;
    let totalPages = 0;
    let totalItems = 0;

    let searchEmail = '';
    let searchCharacter = '';
    let searchAuthProvider = '';

    const authProviders = [
        { value: '', label: '전체' },
        { value: 'none', label: '일반' },
        { value: 'Google', label: 'Google' }
    ];

    async function fetchData(pageNumber) {
        try {
            const response = await getMemberList(pageNumber, pageSize, {
                username: searchEmail,
                mainCharacter: searchCharacter,
                authProvider: searchAuthProvider
            });
            if (response && response.content) {
                data = response.content.map(member => ({
                    ID: member.memberId,
                    이메일: member.username,
                    대표캐릭터: member.mainCharacter,
                    가입일: formatDate(member.createdDate),
                    가입방식: member.authProvider === 'none' ? '일반' : member.authProvider,
                    등록여부: member.apiKey !== null ? '완료' : '미완료'
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
    <h1>회원 관리</h1>
    
    <div class="search-container">
        <input bind:value={searchEmail} placeholder="이메일 검색" />
        <input bind:value={searchCharacter} placeholder="대표캐릭터 검색" />
        <div class="select-container">
            <label for="authProvider">가입방식:</label>
            <select id="authProvider" bind:value={searchAuthProvider}>
                {#each authProviders as provider}
                    <option value={provider.value}>{provider.label}</option>
                {/each}
            </select>
        </div>
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
