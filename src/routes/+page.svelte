<script>
	import MemberStatistics from '../components/index/MemberStatistics.svelte';
	import CharacterStatistics from '../components/index/CharacterStatistics.svelte';
</script>

<div class="app">
	<div class="dashboard">
		<div class="dashboard-items">
			<MemberStatistics />
			<CharacterStatistics />
		</div>
	</div>
</div>

<style>
	.app {
		font-family: Arial, sans-serif;
		margin: 20px 0px 20px 0px;
		width: 90%;
		margin: 0px auto;
		margin-top: 20px;
	}

	.dashboard {
		background-color: #ecf0f1;
		border-radius: 10px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.dashboard-items {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
</style>
