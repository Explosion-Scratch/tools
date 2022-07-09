<script>
	export let url = '';
	import { onMount } from 'svelte';
	import { until } from '$helpers/utils';
	let outer;
	let pdf = {};
	let doc = {};
	let pages = [];
	let loading = true;
	onMount(async () => {
		pdf = await until(() => window['pdfjs-dist/build/pdf']);
		pdf.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
		doc = await pdf.getDocument(url).promise;
		for (let i = 0; i < doc.numPages; i++) {
			pages.push(await doc.getPage(i + 1));
		}

		let container = outer.querySelector('#pages');
		for (let page of pages) {
			await new Promise((resolve) => {
				let canvas = document.createElement('canvas');
				container.appendChild(canvas);
				canvas.width = window.innerWidth;
				canvas.style.border = '1px solid #0005';
				canvas.style.opacity = 0;
				canvas.style.transition = 'opacity .5s ease, height .5s ease';
				canvas.style.height = '0px';
				let viewport = page.getViewport({
					scale: canvas.width / page.getViewport({ scale: 1.0 }).width
				});
				canvas.height = viewport.height;
				let task = page.render({
					canvasContext: canvas.getContext('2d'),
					viewport
				});
				task.promise.then(() => {
					canvas.style.opacity = 1;
					canvas.style.height = 'auto';
					resolve();
				});
			});
			loading = false;
		}
	});
</script>

<div id="pdf_render" bind:this={outer}>
	{#if loading}
		<div id="loading">Loading...</div>
	{/if}
	<div id="pages" />
</div>
<svelte:head>
	<script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
</svelte:head>

<style>
	#pdf_render {
		max-width: 600px !important;
	}
	#pdf_render :global(canvas) {
		width: 100%;
		border: 1px solid #0001 !important;
	}
	#loading {
		font-size: 2rem;
		text-align: center;
		width: 100%;
		margin: 1rem;
		font-weight: 200;
		font-style: italic;
		color: #999;
	}
</style>
