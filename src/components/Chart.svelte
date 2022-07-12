<script>
	import { onMount } from 'svelte';
	import { until } from '$helpers/utils';
	let el;
	export let limits = {};
	export let graphs = [];

	onMount(async () => {
		const Chart = await until(() => window.Chart);
		fetch('https://unpkg.com/chartjs-plugin-zoom@1.2.1/dist/chartjs-plugin-zoom.min.js')
			.then((r) => r.text())
			.then(eval)
			.then(() => {
				until(() => window.ChartZoom).then(() => Chart.register(window.ChartZoom));
			});
		let chart = new Chart(el, {
			type: 'line',
			data: {
				datasets: graphs.map((i) => ({
					label: i.name,
					tension: 0.3,
					pointRadius: 0,
					borderColor: ['#357B85' /* , '#8DBFB4', '#80DAD7', '#D3D08E', '#F0867E' */],
					data: i.points
				}))
			},
			options: {
				responsive: true,
				scales: {
					y: {
						suggestedMin: limits.minY,
						suggestedMax: limits.maxY,
						type: 'linear',
						position: 'right'
					},
					x: {
						suggestedMin: limits.minX,
						suggestedMax: limits.maxX,
						type: 'linear',
						position: 'bottom'
					}
				},
				plugins: {
					zoom: {
						/* limits: {
							x: {
								min: limits.minX,
								max: limits.maxX
							},
							y: {
								min: limits.minY,
								max: limits.maxY
							}
						}, */
						zoom: {
							wheel: {
								enabled: true
							},
							pinch: {
								enabled: true
							},
							mode: 'xy'
						},
						pan: {
							enabled: true
						}
					}
				},
				responsive: true,
				maintainAspectRatio: true
			}
		});
	});
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/hammerjs@2.0.8" defer></script>
	<script
		src="https://unpkg.com/chartjs-plugin-zoom@1.2.1/dist/chartjs-plugin-zoom.min.js"
		defer></script>
</svelte:head>

<canvas class="chart" bind:this={el} />
