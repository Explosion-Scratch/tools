<script>
	import { goto } from '$app/navigation';
	import tools from '../tools.json';
	import tooltip from '$helpers/tooltip';
	import TippyStyles from '$components/TippyStyles.svelte';
</script>

<TippyStyles />

<h2 class="title">Tools</h2>
<span id="desc">Tools that I made because I wanted to. I might add more sometime.</span>

<main class="container">
	{#each tools as tool}
		<div class="tool" on:click={() => goto(`/tools/${tool.id}`, false)}>
			<h2 id="title">{tool.name}</h2>
			<span id="description">{tool.description}</span>
			<a
				use:tooltip={{ content: `/tools/${tool.id}`, theme: 'light' }}
				href={`/tools/${tool.id}`}
				sveltekit:reload
				alt={`${tool.name} link`}
				class="link"
			>
				<div class="text">View</div>
			</a>
		</div>
	{/each}
</main>

<style lang="less">
	:global(body) {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow-y: scroll;
	}
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
	}
	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
		max-width: 700px;
		width: fit-content;
		margin: 3rem;
		place-items: center;
		.tool {
			transition: transform 0.3s ease-out;
			place-self: center;
			padding: 0.5rem 1rem;
			border-radius: 0.2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			cursor: pointer;
			height: 30vh;
			max-height: 200px;
			min-height: 150px;
			&:hover {
				box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
				transform: scale(1.04);
			}
			&:active {
				transform: scale(0.97);
			}
			#title {
				color: #333;
				font-weight: 100;
			}
			#description {
				color: #555;
			}
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
</style>
