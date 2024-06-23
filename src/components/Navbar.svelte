<script>
	import { onMount } from 'svelte';
	import { isAuthenticated, member, socialLogin, logout } from '../api/auth'; // auth.js 파일에서 member와 login 함수 가져오기

	// 로그인 상태를 확인하고, member store를 구독하여 회원 정보를 가져옴
	onMount(() => {
		const unsubscribe = member.subscribe((value) => {
			if (value !== null) {
				console.log('Logged in member:', value);
			}
		});
		return unsubscribe; // 컴포넌트가 언마운트될 때 구독을 해제
	});
</script>

<nav>
	<a class="logo" href="/">Loatodo Dashboard</a>
	<div class="user-info">
		{#if $member}
			Welcome, {$member.username}
			<button on:click={logout}>Logout</button>
		{:else}
			로그인 해주세요.
			<button on:click={socialLogin}>Google Login</button>
		{/if}
	</div>
</nav>

<style>
	nav {
		background-color: #333;
		color: white;
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.2em;
		font-weight: bold;
		color: white;
	}

	.user-info {
		display: flex;
		align-items: center;
	}

	button {
		margin-left: 10px;
		padding: 5px 10px;
		background-color: #f44336;
		color: white;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}

	button:hover {
		background-color: #d32f2f;
	}
</style>
