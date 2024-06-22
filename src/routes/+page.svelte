<script>
	import MemberStatistics from './MemberStatistics.svelte';
</script>

<div class="app">
	<div class="dashboard">
		<div class="dashboard-items">
			<MemberStatistics />
		</div>
	</div>
</div>

<style>
	.app {
		font-family: Arial, sans-serif;
		margin: 20px;
		width: 90%;
	}

	.dashboard {
		background-color: #ecf0f1;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.dashboard-items {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
