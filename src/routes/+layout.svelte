<script>
	import { onMount } from 'svelte';
	import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import { isAuthenticated, isLogin } from '../api/auth';

	onMount(() => {
		isLogin();
	});
</script>

<main>
	<Navbar />
	<div class="container">
		<Sidebar />
		<div class="content">
			{#if $isAuthenticated}
				<slot />
			{:else}
				<p>Please login.</p>
			{/if}
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #f0f2f5;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.container {
		display: flex;
		flex: 1;
	}

	.content {
		width: (100vw - 230px);
		flex: 1;
		overflow-y: auto;
	}
</style>
