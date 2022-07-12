<script>
	import TippyStyles from '$components/TippyStyles.svelte';
	import { loading } from '../store.js';
	import tooltip from '$helpers/tooltip.js';
	import Chart from '$components/Chart.svelte';
	export let result = {};
	let img = true;
	let container = document.body;
	import { afterUpdate, onMount } from 'svelte';
	onMount(() => {
		console.log('Result component: ', result);
	});
	afterUpdate(() => {
		console.log(window.renderMathInElement);
		window?.renderMathInElement?.(container, {
			delimiters: [
				{ left: '$$', right: '$$', display: true },
				{ left: '$', right: '$', display: false },
				{ left: '\\(', right: '\\)', display: false },
				{ left: '\\[', right: '\\]', display: true }
			]
		});
	});
</script>

<TippyStyles />
<div class="result_container" bind:this={container}>
	{#if result.allGraphData?.[0]?.graphImageData && !$loading}
		<div class="action">
			<h2 class="actionName graph_header">
				{result.allGraphData[0].actionName}
				<button
					id="switch"
					use:tooltip={{ content: `Toggle between interactive graph and image` }}
					on:click={() => (img = !img)}
				>
					{#if !img}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="iconify iconify--mdi"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M19 19H5V5h14m0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.04 9.29l-2.75 3.54l-1.96-2.36L6.5 17h11l-3.54-4.71Z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="iconify iconify--bi"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 16 16"
							><path
								fill="currentColor"
								fill-rule="evenodd"
								d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61l4.15-5.073a.5.5 0 0 1 .704-.07Z"
							/></svg
						>
					{/if}
				</button>
			</h2>
			{#if img}
				<img
					class="graph"
					src={result.allGraphData[0].graphImageData}
					alt="Graph of {result.detectedLatex}"
				/>
			{:else}
				<Chart
					graphs={result.allGraphData[0].rawGraphData.curveData
						.map((i) =>
							i.pointGroups?.length > 1 ? i.pointGroups.map((j) => ({ ...i, pointGroups: [j] })) : i
						)
						.flat()
						.map((i) => ({
							name: i.curveExpression,
							points: i.pointGroups[0].points
						}))}
					limits={result.allGraphData[0].displayRange}
				/>
			{/if}
		</div>
	{/if}
	{#each result.actions as action}
		<div class="action">
			<h2 class="actionName">
				{action.actionName}
			</h2>
			<div class="solution_text">
				{@html action.solution}
			</div>
			{#each action.templateSteps as templateStep}
				<h4 class="solutionName">{templateStep.templateName}</h4>
				<div class="steps">
					{#each templateStep.steps as step}
						<div class="from_to_container">
							<div class="from">
								{step.prevExpression}
							</div>
							<div class="to">
								{step.expression}
							</div>
						</div>
						<div class="text">
							{step.step}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="less">
	@color: #088;
	#switch {
		transition: opacity 0.3s ease, background-color 0.3s ease;
		background: transparent;
		cursor: pointer;
		&:hover {
			background: #0001;
			opacity: 0.8;
		}
		border: none;
		padding: 3px;
		border-radius: 3px;
		opacity: 0.5;
		margin: 0;
		display: grid;
		place-items: center;
		transform: scale(0.8);
		margin-left: 0.5rem;
	}
	.graph_header {
		width: fit-content;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.action {
		border: 1px solid fade(@color, 10%);
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		margin: 0.5rem auto;
		.actionName {
			font-style: italic;
			font-weight: 200;
			font-size: 1.6rem;
		}
		.graph {
			width: 80%;
			margin: 0 auto;
			display: block;
			border-radius: 0.3rem;
			margin-bottom: 0.5rem;
		}
		.solution_text {
			border: 0.15rem solid fade(@color, 20%);
			padding: 0.5rem 1rem;
			border-radius: 0.3rem;
		}
		.solutionName {
			margin-top: 2rem;
			color: darken(@color, 20);
			font-weight: 200;
			font-size: 1.2rem;
		}
		.steps {
			.from_to_container {
				display: flex;
				.from,
				.to {
					min-height: 3rem;
					:is(.katex-display) {
						margin: 5px 0;
					}
					border: 1px solid fade(@color, 10%);
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					position: relative;
				}
				.from::after {
					content: '➜';
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(50%, -50%);
					font-weight: 900;
					color: @color;
				}
				.from {
					border-style: dashed;
					opacity: 0.6;
				}
			}
			.text {
				margin-top: 0.5rem;
				margin-bottom: 2rem;
				font-style: italic;
				color: fade(darken(@color, 15), 90%);
				padding: 0 0.5rem;
			}
		}
	}
</style>
