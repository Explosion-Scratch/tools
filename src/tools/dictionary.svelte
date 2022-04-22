<script>
	import _$ from 'bijou.js';
	let word = 'smile';
	let def = [];
	lookup();
	async function lookup() {
		if (!word.trim().length) {
			def = [];
		}
		def = await fetch(
			`https://cors.explosionscratc.repl.co/api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
				word
			)}`
		).then((r) => r.json());
		if (!Array.isArray(def)) {
			def = [];
		}
	}

	function play(audio) {
		console.log(audio);
		if (!audio) {
			return;
		}
		let el = document.createElement('audio');
		el.src = audio;
		el.onload = () => el.remove();
		document.body.appendChild(el);
		return () => el.play();
	}
</script>

<div class="container">
	<h2 class="lookup">Dictionary</h2>
	<input bind:value={word} placeholder="Word to look up" on:keyup={_$.throttle(lookup, 1000)} />

	{#if def && def.length}
		{#each def as word}
			<div class="word">
				<h2 class="wordword">
					{word.word}
					{#if word?.phonetics?.[0]?.audio}<button
							class="play"
							on:click={() => play(word.phonetics[0].audio)()}
						>
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
									d="M246 128a77.5 77.5 0 0 1-22.9 55.2a6 6 0 0 1-8.4 0a5.9 5.9 0 0 1 0-8.5a66.1 66.1 0 0 0 0-93.4a6 6 0 1 1 8.4-8.5A77.5 77.5 0 0 1 246 128Zm-88-96v192a6 6 0 0 1-3.4 5.4a5.8 5.8 0 0 1-2.6.6a5.8 5.8 0 0 1-3.7-1.3L77.9 174H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h45.9l70.4-54.7A6 6 0 0 1 158 32ZM32 162h42V94H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2ZM146 44.3L86 90.9v74.2l60 46.6Zm40.4 56.8a5.9 5.9 0 0 0 0 8.5a26.1 26.1 0 0 1 0 36.8a5.9 5.9 0 0 0 0 8.5a6.1 6.1 0 0 0 4.2 1.7a6.5 6.5 0 0 0 4.3-1.7a38.1 38.1 0 0 0 0-53.8a6.1 6.1 0 0 0-8.5 0Z"
								/></svg
							>
						</button>{/if}
				</h2>
				{#if word.phonetic}<span class="phonetic">{word.phonetic}</span>{/if}
				<ol>
					{#each word.meanings
						.map((i) => i.definitions.map((j) => ({ ...j, partOfSpeech: i.partOfSpeech })))
						.flat() as meaning}
						<li>
							<span class="def">{meaning.definition}</span>
							{#if meaning.example}<span class="example">{meaning.example}</span>{/if}
						</li>
					{/each}
				</ol>
			</div>
		{/each}
	{:else if word.length}
		<span class="noWords">No definition found</span>
	{/if}
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: scroll;
		margin: 40px 0;
	}
	.noWords {
		margin-top: 20px;
		font-size: 1.3rem;
		color: #666;
		font-weight: 100;
		font-style: italic;
	}
	* {
		box-sizing: border-box;
	}
	.word {
		max-width: 500px;
		margin: 10px auto;
		box-shadow: 2px 2px 4px 3px #0001;
		padding: 10px 20px;
		border-radius: 5px;
	}
	.wordword {
		color: #333;
		font-weight: 100;
		margin: 0;
		margin-top: 20px;
	}
	button {
		background: transparent;
		padding: 0;
		border: none;
		cursor: pointer;
	}

	button svg {
		width: 15px;
		height: 15px;
	}
	.phonetic {
		color: #777;
		font-style: italic;
	}
	ol {
		margin-top: 20px;
		color: #333;
	}
	.def {
		font-weight: 500;
	}
	.example {
		font-weight: 200;
		font-style: italic;
		display: block;
	}
	.example::before,
	.example::after {
		content: '"';
		font-size: 1.2rem;
		color: #888;
	}
	input {
		padding: 8px 20px;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		border: 1px solid #0001;
		box-shadow: 2px 2px 4px #0001;
	}
	input:focus {
		outline: none;
	}
	input:focus,
	input:hover {
		box-shadow: 2px 2px 4px #0001, 0 0 2px #0001;
	}
</style>
