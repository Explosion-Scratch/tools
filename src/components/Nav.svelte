<script>
	import { onMount } from 'svelte';
	let path = '/nonexistant';
	let disallowed = ['beautify', '', 'blank'];
	onMount(() => {
		setInterval(() => {
			path = location.pathname.replace(/\/$/, '').split('/').slice(-1)[0];
		}, 100);
	});
</script>

{#if !disallowed.includes(path)}
	<div id="nav">
		<a href="/tools/" sveltekit:prefetch alt="Home">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ph"
				width="32"
				height="32"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M208 222h-48a14 14 0 0 1-14-14v-48a2 2 0 0 0-2-2h-32a2 2 0 0 0-2 2v48a14 14 0 0 1-14 14H48a14.3 14.3 0 0 1-9.9-4.1A14.1 14.1 0 0 1 34 208v-92.5a13.9 13.9 0 0 1 4.6-10.3l80-72.8a14.1 14.1 0 0 1 18.8 0l80 72.8a13.9 13.9 0 0 1 4.6 10.3V208a14 14 0 0 1-14 14Zm-96-76h32a14 14 0 0 1 14 14v48a2 2 0 0 0 2 2h48a2.1 2.1 0 0 0 2-2v-92.5a1.8 1.8 0 0 0-.6-1.4l-80.1-72.8a1.9 1.9 0 0 0-2.6 0l-80 72.8a1.6 1.6 0 0 0-.7 1.4V208a2.1 2.1 0 0 0 2 2h48a2 2 0 0 0 2-2v-48a14 14 0 0 1 14-14Z"
				/></svg
			>
		</a>
	</div>
{/if}

<style lang="less">
	#nav {
		position: absolute;
		top: 0;
		left: 0;

		a {
			padding: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: background-color 0.3s ease-in-out, opacity 0.1s ease-in;
			border-radius: 3px;
			margin: 5px;
			color: #333;
			opacity: 0.5;
			&:hover {
				opacity: 1;
				background: #0001;
			}
			svg {
				width: 2ch;
				height: 2ch;
			}
		}
	}
</style>
