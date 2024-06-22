<script>
	import PeopleIcon from '@material-ui/icons/People';
	import SettingsIcon from '@material-ui/icons/Settings';
	import BarChartIcon from '@material-ui/icons/BarChart';

	let menuItems = [
		{ name: 'Users', icon: PeopleIcon },
		{ name: 'Settings', icon: SettingsIcon },
		{ name: 'Reports', icon: BarChartIcon }
	];
</script>

<aside>
	<ul>
		{#each menuItems as item}
			<li>
				<a href="/{item.name.toLowerCase()}">
					<span class="icon"><item.icon /></span>
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
		margin-right: 10px;
		font-size: 1.2em;
	}
</style>
