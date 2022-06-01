<script>
	import tooltip from '$helpers/tooltip.js';
	import forwardevents from '$helpers/forwardevents.js';
	import { createEventDispatcher } from 'svelte';

	export let href = '/tools';
	export let alt = '';
	export let secondary = '→ ';
	export let text = 'View';
	export let type = 'link';

	const dispatch = createEventDispatcher();

	function url(href) {
		if (href === '#') {
			return alt;
		}
		return new URL(href).pathname;
	}
</script>

{#if type === 'link'}
	<a
		use:forwardevents={{ dispatch }}
		data-hovertext={secondary}
		use:tooltip={{ content: url(href), theme: 'light' }}
		{href}
		sveltekit:reload
		{alt}
		class="link"
	>
		<div class="text">{text}</div>
	</a>
{:else if type === 'button'}
	<button
		use:forwardevents={{ dispatch }}
		data-hovertext={secondary}
		use:tooltip={{ content: alt, theme: 'light' }}
		{alt}
		class="link"
	>
		<div class="text">{text}</div>
	</button>
{/if}

<style lang="less">
	.link {
		transition: border 0.3s ease;
		border: 1px solid transparent;
		padding: 1rem 2rem;
		background: #0001;
		border-radius: 3px;
		color: #333;
		text-decoration: none;
		font-weight: 200;
		position: relative;
		overflow: hidden;
		display: inline-block;
		.text {
			transition: left 0.4s ease;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&::after {
			transition: right 0.4s ease;
			position: absolute;
			right: -50%;
			transform: translate(50%, -50%);
			content: attr(data-hovertext);
		}
		&:hover {
			&::after {
				right: 50%;
			}
			.text {
				left: -50%;
			}
			border: 1px dashed #0001;
		}
	}
</style>
