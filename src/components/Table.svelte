<script>
	export let columns;
	export let data;
	export let currentPage;
	export let pageSize;
	export let totalPages;
	export let totalItems;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function changePage(newPage) {
		if (newPage >= 1 && newPage <= totalPages) {
			dispatch('pageChange', newPage);
		}
	}
</script>

<div class="table-container">
	<div class="table-header">
		<h2>회원 목록</h2>
		<span class="total-items">총 {totalItems}개</span>
	</div>
	<div class="table-responsive">
		<table>
			<thead>
				<tr>
					{#each columns as column}
						<th>{column}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each data as row}
					<tr>
						{#each columns as column}
							<td>{row[column]}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<div class="pagination">
	<button on:click={() => changePage(currentPage - 1)} disabled={currentPage === 1}>이전</button>
	<span>{currentPage} / {totalPages}</span>
	<button on:click={() => changePage(currentPage + 1)} disabled={currentPage === totalPages}>다음</button>
</div>

<style>
	.table-container {
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
		overflow: hidden;
		margin-bottom: 20px;
	}
	.table-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		background: #f8f9fa;
		border-bottom: 1px solid #e9ecef;
	}
	.table-header h2 {
		margin: 0;
		font-size: 1.2rem;
		color: #343a40;
	}
	.total-items {
		font-size: 0.9rem;
		color: #6c757d;
	}
	.table-responsive {
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
	}
	th,
	td {
		padding: 12px 15px;
		text-align: left;
		border-bottom: 1px solid #e9ecef;
	}
	th {
		background-color: #f8f9fa;
		font-weight: 600;
		color: #495057;
	}
	tr:last-child td {
		border-bottom: none;
	}
	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}
	.pagination button {
		background: #007bff;
		color: white;
		border: none;
		padding: 8px 12px;
		margin: 0 5px;
		border-radius: 4px;
		cursor: pointer;
		transition: background 0.3s;
	}
	.pagination button:hover {
		background: #0056b3;
	}
	.pagination button:disabled {
		background: #6c757d;
		cursor: not-allowed;
	}
	.pagination span {
		margin: 0 10px;
		color: #495057;
	}

	@media (max-width: 768px) {
		.table-header {
			flex-direction: column;
			align-items: flex-start;
		}
		.total-items {
			margin-top: 8px;
		}
		th,
		td {
			padding: 8px 10px;
		}
	}
</style>
