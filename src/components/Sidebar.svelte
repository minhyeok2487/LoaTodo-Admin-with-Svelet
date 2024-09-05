<script>
	import FaUsers from 'svelte-icons/fa/FaUsers.svelte';
	import FaCommentAlt from 'svelte-icons/fa/FaCommentAlt.svelte';

	let menuItems = [
		{ name: '회원 관리', icon: FaUsers, url: '/member' },
		{ name: '방명록 관리', icon: FaCommentAlt, url: '/comment' }
	];
</script>

<aside>
	<ul>
		{#each menuItems as item}
			<li>
				<a href="{item.url.toLowerCase()}">
					<span class="icon">
						<svelte:component this={item.icon} />
						</span>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</aside>

<style>
	aside {
		width: 200px;
		background-color: #2c3e50;
		color: white;
		height: 100%;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	li {
		padding: 10px 20px;
	}

	a {
		color: white;
		text-decoration: none;
		display: flex;
		align-items: center;
	}

	a:hover {
		background-color: #34495e;
	}

	.icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        margin-right: 0.5em;
    }
</style>
