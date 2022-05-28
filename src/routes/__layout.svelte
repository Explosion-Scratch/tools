<script context="module">
	import tools from '../tools.json';
	console.log(tools);
	export async function load({ params, url }) {
		let id = url.pathname.split('/').slice(-1)[0];

		let found = tools.find((i) => i.id.toLowerCase() === id.toLowerCase());
		if (!found) {
			return {
				tool: {}
			};
		}
		console.log(found);
		return {
			props: {
				tool: found
			}
		};
	}
</script>

<script>
	export let tool = {};
	import { loading } from '../store.js';
	import Loader from '$components/Loader.svelte';
	import Nav from '$components/Nav.svelte';
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import SEO from '$components/SEO.svelte';

	let LISTENERS = {};

	beforeNavigate(() => ($loading = true));
	afterNavigate(() => ($loading = false));

	onMount(() => {
		setInterval(e, 2000);
		let blurred = false;
		LISTENERS.onfocus = () => ((blurred = false), e());
		LISTENERS.onblur = () => ((blurred = true), e());

		e();

		function e() {
			let emojis = ['😄', '😛', '😝', '😁', '🙃', '🤠', '🤓'];
			let sadEmojis = emojis;
			let emoji = blurred
				? sadEmojis[~~(Math.random() * 1000) % sadEmojis.length]
				: emojis[~~(Math.random() * 1000) % emojis.length];
			[...document.querySelectorAll('link[rel=icon]')].forEach(
				(a) =>
					(a.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232ec7ce%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2276%22>${emoji}</text></svg>`)
			);
		}
	});
</script>

{#if $loading}
	<Loader />
{/if}
<Nav />

<slot />
<svelte:window on:blur={LISTENERS.onblur} on:focus={LISTENERS.onfocus} />
<svelte:head>
	<SEO
		title={tool?.title || tool?.name || 'Tools'}
		description={tool?.description || tool?.name || 'Svelte tools'}
		keywords="code,javascript,{tool?.keywords || tool?.id}"
		site="Explosion's Tools"
		image={tool?.image || 'thumbnail.png'}
		color="#a7c9d9"
	/>
	<base href="/tools/" />
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width,initial-scale=1" />
	<title>Tools</title>
	<link
		rel="icon"
		type="image/svg+xml"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%232ec7ce%22></rect><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2276%22>😄</text></svg>"
	/>
	<style>
		@media print {
			.hidden-print {
				display: none !important;
			}
		}
		.screenshot .hidden-print {
			display: none !important;
		}
	</style>
</svelte:head>

<style>
	:global(html, body, .reset) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(::selection) {
		background: #0001;
	}
	:global(html) {
		font-family: 'Work Sans', Roboto, Montserrat, 'Lucida Sans', 'Lucida Sans Regular',
			'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
	:global(textarea, input, select) {
		font-family: 'Work Sans', Roboto, Montserrat, 'Lucida Sans', 'Lucida Sans Regular',
			'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		padding: 0.5rem 1rem;
	}
	:global(body) {
		min-height: 100vh;
	}
</style>
