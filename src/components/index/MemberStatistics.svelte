<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { getMemberDashboard } from '../../api/home';

	const chartOptions = {
		scales: {
			y: {
				beginAtZero: true
			}
		},
		plugins: {
			title: {
				display: true,
				text: '지난 2주간 가입자수 통계',
				font: {
					size: 16
				}
			},
			legend: {
				display: false // 범례 숨기기
			}
		}
	};

	let myChart;

	onMount(async () => {
		const ctx = document.getElementById('member-statistics');
		const data = await getMemberDashboard();

		// 데이터가 비어있거나 undefined인 경우 처리
		const dates = data && data.length ? data.map((member) => member.date).reverse() : [];
		const counts = data && data.length ? data.map((member) => member.count).reverse() : [];

		const chartData = {
			labels: dates,
			datasets: [
				{
					data: counts,
					backgroundColor: 'rgba(3,117,220)',
					borderColor: 'rgba(3,117,220)',
					tension: 0.1 // 선을 부드럽게 만들기
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

<div class="member-chart">
	<canvas id="member-statistics" />
</div>

<style>
	.member-chart {
		width: 50%;
		height: 100%;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		margin-right: 30px;
	}

	canvas {
		width: 100% !important;
		height: 100% !important;
	}
</style>
