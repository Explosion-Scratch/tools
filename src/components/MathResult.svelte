<script>
	import { loading } from '../store.js';
	import Chart from '$components/Chart.svelte';
	export let result = {};
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

<div class="result_container" bind:this={container}>
	{#if result.allGraphData?.[0]?.graphImageData && !$loading}
		<div class="action">
			<h2 class="actionName">{result.allGraphData[0].actionName}</h2>
			<noscript
				><img
					class="graph"
					src={result.allGraphData[0].graphImageData}
					alt="Graph of {result.detectedLatex}"
				/></noscript
			>
			<!-- 
				limits: {
					maxX: 16.6375
					maxY: 30.25
					minX: -16.6375
					minY: -3.025
				}
				graphs: [{name: "blah", points: [{x: 0, y: 0}]}]
			 -->
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