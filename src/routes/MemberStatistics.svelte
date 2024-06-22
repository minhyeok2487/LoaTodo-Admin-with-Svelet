<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { getMemberDashboard } from '../api/home';

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			title: {
				display: true,
				text: '지난 2주간 가입자수 통계', // Title text
				font: {
					size: 16 // Adjust font size as needed
				}
			}
		}
	};

	let myChart;

	onMount(async () => {
		const ctx = document.getElementById('barChart');
		const data = await getMemberDashboard();
		const dates = data.map((member) => member.date).reverse();
		const counts = data.map((member) => member.count).reverse();

		const chartData = {
			labels: dates,
			datasets: [
				{
					data: counts,
					backgroundColor: 'rgba(3,117,220)'
				}
			]
		};

		// Create new chart instance
		myChart = new Chart(ctx, {
			type: 'line',
			data: chartData,
			options: chartOptions
		});
	});
</script>

<canvas id="barChart" />
