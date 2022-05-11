<script>
	import { onMount } from 'svelte';
	import hlStyle from 'svelte-highlight/styles/nord';
	import Highlight from 'svelte-highlight';
	import js_hl from 'svelte-highlight/languages/javascript';
	import tooltip from '$helpers/tooltip.js';
	import confetti from 'canvas-confetti';

	let bookmarklets;
	import { fly, fade } from 'svelte/transition';

	let POPUP = {
		open: false
	};

	onMount(() => {
		bookmarklets = fetch(
			'https://gist.githubusercontent.com/Explosion-Scratch/c853c40e4c4c0b7ad74f7d8644c238ba/raw/4857498f38065990161f4749fcdfe9bc75901bc5/Bookmarklets.md'
		)
			.then((r) => r.text())
			.then((text) => {
				return text
					.split('###')
					.slice(1)
					.map((body) => {
						let out = {};
						out.title = body.split('\n')[0];
						out.description = body.split('\n')?.slice(1)?.join('\n')?.split('```')?.[0];
						out.code = body.split('```')[1]?.split('```')[0];
						out.code = out.code.replace('js\n', '');
						out.color = ~~(Math.random() * 360);
						out = Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.trim?.() || v]));
						return out;
					});
			});
		bookmarklets.then(console.log);
	});
	async function run(action) {
		// action === beautify | minify
		const code = POPUP.code;
		if (action === 'beautify') {
			POPUP.code = window.prettier.format(code, {
				parser: 'babel',
				plugins: window.prettierPlugins
			});
		}
		if (action === 'minify') {
			POPUP.code = await window.Terser.minify(code).then((a) => a.code);
		}
		if (!POPUP.code) {
			// Reset to old version
			POPUP.code = code;
		}
	}
	function addjs(code) {
		if (!code.trim().startsWith('javascript:')) {
			return `javascript:{ ${code} }`;
		}
		return code;
	}

	function popup(thing) {
		POPUP.open = true;
		POPUP = { ...POPUP, ...thing };
		run('beautify');
	}
	function copy(text) {
		navigator.clipboard.writeText(text).then(
			() => confetti(),
			() => {
				window.open(URL.createObjectURL(new Blob([text], { type: 'text/plain' })));
			}
		);
	}
	function niceslice(text, len) {
		return text.length > len ? text.slice(0, len) + '...' : text;
	}
</script>

<div class="container">
	{#await bookmarklets}
		<span class="loading" in:fly={{ y: 20, duration: 500 }} out:fade>Loading...</span>
	{:then b}
		<h2 class="title">Bookmarklets</h2>
		<span id="desc">Click on any of the bookmarklets to view more!</span>
		<div class="bookmarklet_grid">
			{#each b || [] as _}
				<div
					on:click={() => popup(_)}
					class="bookmarklet"
					style={`--first-color: hsla(${_.color}, 78%, 68%, 10%); --second-color: hsla(${
						(_.color + 50) % 360
					}, 78%, 68%, 10%);`}
				>
					<span class="title">{_.title}</span>
					<span class="description">{niceslice(_.description, 60)}</span>
					<a id="link" on:click={popup(_)}>
						<span class="text">View</span>
					</a>
				</div>
			{/each}
		</div>
	{:catch e}
		<span class="error" transition:fly={{ y: 20, duration: 500 }}
			>There was an error{#if e}: <b>{e}</b>{/if}</span
		>
	{/await}
</div>
<svelte:head>
	{@html hlStyle}
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/standalone.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/parser-babel.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/source-map@0.7.3/dist/source-map.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js"></script>
</svelte:head>
{#if POPUP.open}
	<div id="popup_bg" transition:fade on:click={() => (POPUP.open = false)} />
	<div id="popup" transition:fly={{ y: 20, duration: 500 }}>
		<div class="close" on:click={() => (POPUP.open = false)}>
			<!-- @prettier-ignore -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				aria-hidden="true"
				role="img"
				class="iconify iconify--ion"
				width="32"
				height="32"
				preserveAspectRatio="xMidYMid meet"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"
				/></svg
			>
		</div>
		<h2 class="popup__title">{POPUP.title}</h2>
		<span class="popup__description">{POPUP.description}</span>
		<Highlight language={js_hl} code={POPUP.code} />
		<div class="buttons">
			<button class="copy" alt="Copy code" on:click={() => copy(POPUP.code)}>Copy</button>
			<button class="beautify" on:click={() => run('beautify')} alt="Beautify code" use:tooltip>
				<!-- @prettier-ignore -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--simple-icons"
					width="32"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M8.571 23.429A.571.571 0 0 1 8 24H2.286a.571.571 0 0 1 0-1.143H8c.316 0 .571.256.571.572zM8 20.57H6.857a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zm-5.714 1.143H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM8 18.286H2.286a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143zM16 16H5.714a.571.571 0 0 0 0 1.143H16A.571.571 0 0 0 16 16zM2.286 17.143h1.143a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm17.143-3.429H16a.571.571 0 0 0 0 1.143h3.429a.571.571 0 0 0 0-1.143zM9.143 14.857h4.571a.571.571 0 0 0 0-1.143H9.143a.571.571 0 0 0 0 1.143zm-6.857 0h4.571a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zM20.57 11.43h-9.14a.571.571 0 0 0 0 1.142h9.142a.571.571 0 0 0 0-1.142zM9.714 12a.571.571 0 0 0-.571-.571H5.714a.571.571 0 0 0 0 1.142h3.429A.571.571 0 0 0 9.714 12zm-7.428.571h1.143a.571.571 0 0 0 0-1.142H2.286a.571.571 0 0 0 0 1.142zm19.428-3.428H16a.571.571 0 0 0 0 1.143h5.714a.571.571 0 0 0 0-1.143zM2.286 10.286H8a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm13.143-2.857A.57.57 0 0 0 16 8h5.714a.571.571 0 0 0 0-1.143H16a.571.571 0 0 0-.571.572zm-8.572-.572a.571.571 0 0 0 0 1.143H8a.571.571 0 0 0 0-1.143H6.857zM2.286 8H4.57a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm16.571-2.857c0 .315.256.571.572.571h1.142a.571.571 0 0 0 0-1.143H19.43a.571.571 0 0 0-.572.572zm-1.143 0a.571.571 0 0 0-.571-.572H12.57a.571.571 0 0 0 0 1.143h4.572a.571.571 0 0 0 .571-.571zm-15.428.571h8a.571.571 0 0 0 0-1.143h-8a.571.571 0 0 0 0 1.143zm5.143-2.857c0 .316.255.572.571.572h11.429a.571.571 0 0 0 0-1.143H8a.571.571 0 0 0-.571.571zm-5.143.572h3.428a.571.571 0 0 0 0-1.143H2.286a.571.571 0 0 0 0 1.143zm0-2.286H16A.571.571 0 0 0 16 0H2.286a.571.571 0 0 0 0 1.143z"
					/></svg
				>
			</button>
			<button class="minify" on:click={() => run('minify')} alt="Minify code" use:tooltip>
				<!-- @prettier-ignore -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					aria-hidden="true"
					role="img"
					class="iconify iconify--iconoir"
					width="32"
					height="32"
					preserveAspectRatio="xMidYMid meet"
					viewBox="0 0 24 24"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M18 12H6m6 10v-6m0 0l3 3m-3-3l-3 3m3-17v6m0 0l3-3m-3 3L9 5"
					/></svg
				>
			</button>
			<a
				class="install"
				href={addjs(POPUP.code)}
				on:click|preventDefault={({ target: { href } }) =>
					prompt(
						"Are you sure you want to run this code (this alert won't show up on the installed version): ",
						POPUP.code
					)
						? window.eval(addjs(POPUP.code))
						: ''}
				alt="Install"
				use:tooltip
			>
				<span id="hide">{POPUP.title}</span>
				<!-- @prettier-ignore -->
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
						d="M207.2 116.7L178.9 145a48.2 48.2 0 0 1-67.9 0a4 4 0 1 1 5.7-5.7a40.1 40.1 0 0 0 56.6 0l28.2-28.3a40 40 0 0 0 0-56.5a39.7 39.7 0 0 0-56.5 0l-19.8 19.8a4 4 0 0 1-5.7-5.7l19.8-19.8a48 48 0 0 1 67.9 67.9Zm-76.4 65L111 201.5A40 40 0 0 1 54.5 145l28.2-28.3a40.1 40.1 0 0 1 56.6 0a4 4 0 0 0 5.7-5.7a48.1 48.1 0 0 0-67.9 0l-28.3 28.3a48.1 48.1 0 0 0 0 67.9a47.9 47.9 0 0 0 67.9 0l19.8-19.8a4 4 0 0 0-5.7-5.7Z"
					/></svg
				>
			</a>
		</div>
	</div>
{/if}

<style lang="less">
	.title {
		font-size: 2rem;
		text-align: center;
	}
	#desc {
		color: #555;
		font-weight: 200;
		font-style: italic;
		font-size: 1.1rem;
		text-align: center;
		width: 100%;
		display: block;
		margin-bottom: 3rem;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: scroll;
		.loading {
			font-size: 2rem;
			font-style: italic;
			font-weight: 200;
			color: #666;
		}
		.error {
			color: #955;
			padding: 0.5rem 1rem;
			background: #9001;
			border: 2px solid #955;
			border-radius: 0.2rem;
		}
	}

	.bookmarklet_grid {
		width: 80vw;
		justify-content: center;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
		gap: 0.5rem;
		.bookmarklet {
			background: #fff5;
			transition: transform 0.3s ease-out;
			padding: 0.5rem 1rem;
			border-radius: 0.2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			cursor: pointer;
			height: 30vh;
			max-height: 250px;
			min-height: 250px;
			&:hover {
				box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
				transform: scale(1.04);
				background: linear-gradient(45deg, var(--first-color), var(--second-color));
			}
			&:active {
				transform: scale(0.97);
			}
			.title {
				color: #333;
				font-weight: 100;
				font-size: 1.5rem;
			}
			.description {
				color: #555;
				margin-top: 0.5rem;
			}
			a {
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
				margin-top: 0.5rem;
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
					content: '→ ';
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
		}
	}

	#popup_bg {
		position: fixed;
		background: #fff5;
		backdrop-filter: blur(5px);
		inset: 0;
		z-index: 10;
		cursor: pointer;
	}

	#popup {
		#hide {
			font-size: 0px;
		}
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 11;
		padding: 1rem 2rem;
		background: white;
		border-radius: 0.3rem;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		width: 80vw;
		height: 80vh;
		max-width: 600px;
		max-height: 500px;
		display: flex;
		flex-direction: column;

		.close {
			position: absolute;
			top: 0;
			right: 0;
			color: #888;
			&:hover {
				color: #666;
			}
			cursor: pointer;
		}
		:global(pre) {
			flex: 1;
			border-radius: 0.2rem;
			overflow: hidden;
			overflow-y: scroll;
			box-sizing: border-box;
		}
		:global(pre *) {
			box-sizing: border-box;
		}
		:global(code) {
			height: 100%;
			overflow-y: scroll;
			display: block;
		}

		.buttons {
			margin-top: 20px;
			display: flex;
			width: 100%;
			button,
			a.install {
				&:is(a) {
					display: grid;
					place-items: center;
				}
				&.copy {
					flex: 6;
				}
				svg {
					width: 2.5ch;
				}
				cursor: pointer;
				margin: 0.2rem;
				flex: 1;
				background: #0001;
				border-radius: 3px;
				color: #333;
				text-decoration: none;
				font-weight: 200;
				transition: border 0.3s ease;
				border: 1px solid transparent;
				&:hover {
					border: 1px dashed #0001;
				}
			}
		}
	}
</style>
