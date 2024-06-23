<script>
	import MemberStatistics from './MemberStatistics.svelte';
	import { onMount } from 'svelte';
	import { isAuthenticated, isLogin } from '../api/auth';
	import CharacterStatistics from './CharacterStatistics.svelte';

	onMount(() => {
		isLogin();
	});
</script>

{#if $isAuthenticated}
	<div class="app">
		<div class="dashboard">
			<div class="dashboard-items">
				<MemberStatistics />
				<CharacterStatistics />
			</div>
		</div>
	</div>
{:else}
	<p>Please login.</p>
	<!-- 로그인 폼 등을 보여줄 수 있음 -->
{/if}

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
		flex-direction: row;
		width: 100%;
	}
</style>
