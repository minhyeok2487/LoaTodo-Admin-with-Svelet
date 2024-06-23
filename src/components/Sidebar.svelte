<script>
	import FaPeople from 'svelte-icons/fa/FaUsers.svelte';
	import FaSettings from 'svelte-icons/fa/FaCog.svelte';
	import FaBarChart from 'svelte-icons/fa/FaChartBar.svelte';

	let menuItems = [
		{ name: 'Users', icon: FaPeople },
		{ name: 'Settings', icon: FaSettings },
		{ name: 'Statistics', icon: FaBarChart }
	];
</script>

<aside>
	<ul>
		{#each menuItems as item}
			<li>
				<a href="/{item.name.toLowerCase()}">
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
