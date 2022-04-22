<script>
	let math = new Proxy(
		{},
		{
			get() {
				return () => 1;
			}
		}
	);
	let error = null;
	let val = '1, 1, 2, 3';
	import { onMount } from 'svelte';

	$: data = val
		.split(',')
		.map((i) => i.split(' '))
		.flat()
		.filter((i) => i.trim())
		.map((i) => +i);

	$: error = data.some(isNaN) ? 'Invalid data' : '';
	$: results = (() => {
		if (!math) {
			return;
		}
		if (data.some(isNaN)) {
			return (error = 'Invalid data');
		} else {
			error = null;
		}
		return data.length
			? {
					Mean: math.mean(data),
					Mode: math.mode(data),
					Media: math.median(data),
					'Standard deviation': math.std(data),
					Min: math.min(data),
					Max: math.max(data),
					Sum: math.sum(data),
					Product: math.prod(data)
			  }
			: {};
	})();

	onMount(() => {
		math = window.math;
	});
	function copy(text) {
		navigator.clipboard.writeText(text).then(
			() => {},
			() => prompt('Copy: ', text)
		);
	}
</script>

<svelte:head>
	<script src="https://unpkg.com/mathjs@10.5.0/lib/browser/math.js"></script>
</svelte:head>
<h2>Statistics calculator</h2>
<textarea bind:value={val} placeholder="Comma or space seperated list of numbers" />

{#if !results || !Object.keys(results).length || error}
	<span class="nothing">{error || 'No data given'}</span>
{:else}
	{#each Object.entries(results) as [type, result]}
		<div class="thing" on:click={() => copy(result)}>
			{type}: <span class="result">{result}</span>
			<button class="copy">
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
						fill="#4f4f4f"
						d="M220 40v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-32 32v144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm-8 4H44v136h136Z"
					/></svg
				>
			</button>
		</div>
	{/each}
{/if}

<style>
	* {
		transition: all 0.2s ease;
		box-sizing: border-box;
	}
	h2 {
		text-align: center;
		padding-top: 10vh;
	}
	textarea {
		min-height: 100px;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	}
	.nothing {
		margin-top: 20px;
		font-size: 1.3rem;
		font-weight: 200;
		font-style: italic;
		color: #666;
		width: 100%;
		display: block;
		text-align: center;
	}
	textarea:focus,
	textarea:hover {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	}
	:global(body) {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.thing,
	h2,
	textarea {
		width: 80vw;
		max-width: 500px;
		margin: 5px auto;
	}

	.thing {
		color: #333;
		font-weight: 200;
		padding: 10px 20px;
		border-radius: 4px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
		cursor: pointer;
		position: relative;
		display: flex;
	}
	.result {
		color: #666;
		font-weight: 600;
		margin-left: 10px;
	}
	.thing:active {
		transform: scale(0.96);
	}
	.thing button svg {
		width: 15px;
		height: 15px;
	}
	.thing button {
		opacity: 0;
		display: flex;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
		background: transparent;
		border: 1px solid #0001;
	}
	.thing:hover button {
		opacity: 1;
	}
	.thing:hover {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	}
</style>
