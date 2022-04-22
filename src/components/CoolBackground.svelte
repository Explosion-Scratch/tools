<script>
	let blocks = [],
		container;
	import { onMount } from 'svelte';

	const blockSize = 50;

	onMount(() => {
		blocks = new Array(
			Math.floor(container.clientWidth / blockSize) * Math.floor(container.clientHeight / blockSize)
		).fill({});
		window.addEventListener('resize', () => {
			blocks = new Array(
				Math.floor(container.clientWidth / blockSize) *
					Math.floor(container.clientHeight / blockSize)
			).fill({});
		});
	});

	const handler = (ev) => {
		blocks.forEach((_, idx) => {
			const e = document.querySelector(`#block_${idx}`);
			if (dist(ev, e) > 100) {
				return (e.style.opacity = '0.1');
			}
			e.style.opacity = 10 / dist(ev, e);
		});
		function dist(ev, e) {
			const { left, width, top, height } = e.getBoundingClientRect();
			const { x, y } = ev;
			return Math.floor(
				Math.sqrt(Math.pow(x - (left + width / 2), 2) + Math.pow(y - (top + height / 2), 2))
			);
		}
	};
</script>

<div
	class="background"
	bind:this={container}
	style={`grid-template-columns: repeat(${~~(container?.clientWidth / blockSize)}, 1fr);`}
	on:mousemove={handler}
>
	{#each blocks as _, i}
		<div
			style={`width: ${blockSize}px; height: ${blockSize}px;`}
			class="block"
			id={`block_${i}`}
			bind:this={blocks[i]}
		/>
	{/each}
</div>

<style>
	.background {
		position: fixed;
		inset: 0;
		display: grid;
	}
	.block {
		display: block;
		border-radius: 4px;
		box-shadow: 2px 2px 4px #0004;
		opacity: 0.1;
		cursor: pointer;
		will-change: opacity;
		transition: opacity 0.1s ease, transform 0.1s ease;
	}
	.block:global(.close) {
		transition: none;
	}
	.block:hover {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
	.block:active {
		transform: scale(0.95);
	}
</style>
