<script>
	import TippyStyles from '$components/TippyStyles.svelte';
	import toast from '$helpers/toast.js';
	import { onMount } from 'svelte';
	import _$ from 'bijou.js';

	import flexsearch from 'flexsearch';
	const { Index } = flexsearch;
	let randomEmoji,
		results = [];
	onMount(() => {
		re();
		search = _$.throttle(search, 200);
	});
	import tooltip from '$helpers/tooltip.js';
	import emojis from 'emojilib';
	let inputVal = '';

	const index = new Index();
	Promise.all(
		Object.entries(emojis).map(
			([emoji, names]) => new Promise((r) => index.addAsync(emoji, names.join(' '), r))
		)
	).then(() => console.log('Added emojis'));

	for (let [emoji, names] of Object.entries(emojis)) {
		index.add(emoji, names.join(' '));
	}

	function copy(text) {
		navigator.clipboard.writeText(text).then(n, () => {
			prompt('Copy: ', text);
			n();
		});

		function n() {
			toast.show(`${text} Copied!`);
		}
	}
	function re() {
		randomEmoji = Object.keys(emojis)[(Date.now() % Object.keys(emojis).length) - 1];
	}
	function search() {
		results = index.searchAsync(inputVal);
	}
</script>

<input
	on:keyup={search}
	on:change={search}
	on:mouseenter={re}
	on:mouseleave={re}
	on:focus={re}
	on:blur={re}
	bind:value={inputVal}
	placeholder={`${randomEmoji} Search for an emoji`}
/>
<TippyStyles />
{#if inputVal.trim().length}
	{#await results}
		<span class="text">Loading...</span>
	{:then results}
		{#if !results.length}
			<span class="text">
				No results
				<button
					on:click={() =>
						(location = `https://www.google.com/search?q=${encodeURIComponent(
							inputVal + ' emoji'
						)}&igu=1&oq=${encodeURIComponent(inputVal + ' emoji')}&sclient=gws-wiz`)}
				>
					Search google?
				</button>
			</span>
		{/if}
		<div class="grid">
			{#each results as result}
				<div
					class="item"
					on:click={() => copy(result)}
					use:tooltip={{
						content: `:${Object.entries(emojis).find((i) => i[0] === result)[1][0]}:`
					}}
				>
					{result}
				</div>
			{/each}
		</div>
	{/await}
{:else}
	<span class="text">Start typing to find an emoji!</span>
{/if}
<svelte:head>
	<style>
		img.emoji {
			height: 1em;
			width: 1em;
			margin: 0 0.05em 0 0.1em;
			vertical-align: -0.1em;
		}
	</style>
</svelte:head>

<style>
	* {
		box-sizing: border-box;
		transition: all 0.2s ease;
	}
	.grid {
		display: grid;
		gap: 0.2rem;
		grid-template-columns: repeat(auto-fit, minmax(20px, 40px));
	}
	.item {
		border-radius: 3px;
		padding: 0.5rem;
		cursor: pointer;
		display: grid;
		place-items: center;
		border: 1px solid transparent;
		transition: all 0.5s ease;
	}
	.item:hover {
		border: 1px solid #0005;
		transition: none;
	}
	.item:active {
		transform: scale(0.97);
	}
	input {
		width: 100%;
		padding: 10px 20px;
		border-radius: 3px;
		border: 1px solid #0001;
	}
	input:focus {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}
	.text {
		width: 100%;
		text-align: center;
		font-size: 1.5rem;
		font-weight: 100;
		color: #666;
		font-style: italic;
		display: block;
		padding: 20px;
	}
	.text button {
		display: block;
		margin: 0 auto;
		font-size: 1rem;
		margin-top: 10px;
		background: #0552;
		color: #055;
		border: 1px solid #055;
		cursor: pointer;
		opacity: 0.4;
		padding: 10px 20px;
		border-radius: 4px;
	}
	.text button:hover {
		opacity: 1;
	}
</style>
