<script>
	import { loading } from '../store.js';
	import Result from '$components/MathResult.svelte';
	let result = null;
	let value = String.raw`x = 3, y = x^2`;
	let mathField = null;

	import { onMount } from 'svelte';

	onMount(() => {
		mathField.setValue(value);
		mathField.setOptions({
			...mathField.getOptions(),
			smartSuperscript: true,
			onKeystroke(mf, key, ev) {
				console.log({ mf, key, ev });
				if (key === 'ctrl+[KeyA]') {
					mf.executeCommand('selectAll');
				}
				if (key === 'ctrl+[Backspace]') {
					mf.setValue('');
				}
				if (key === 'ctrl+[Enter]' || key === '[Enter]') {
					solve();
				}
				return true;
			},
			inlineShortcuts: {
				...mathField.getOptions('inlineShortcuts'),
				//
				// ASCIIIMath
				//
				// Binary operation symbols
				// sqrt: '\\sqrt',
				// pi: '\\pi',
				'*': '\\cdot',
				'**': '\\ast',
				'***': '\\star',
				'//': '\\slash',
				'\\': '\\backslash',
				setminus: '\\backslash',
				'|><': '\\ltimes',
				'><|': '\\rtimes',
				'|><|': '\\bowtie',
				'-:': '\\div',
				divide: '\\div',
				'@': '\\circ',
				'o+': '\\oplus',
				ox: '\\otimes',
				'o.': '\\odot',
				'^^': '\\wedge',
				'^^^': '\\bigwedge',
				vv: '\\vee',
				vvv: '\\bigvee',
				nn: '\\cap',
				nnn: '\\bigcap',
				uu: '\\cup',
				uuu: '\\bigcup',

				// Binary relation symbols
				'-=': '\\equiv',
				'~=': '\\cong',
				lt: '<',
				'lt=': '\\leq',
				gt: '>',
				'gt=': '\\geq',
				'-<': '\\prec',
				'-lt': '\\prec',
				'-<=': '\\preceq',
				// '>-': '\\succ',
				'>-=': '\\succeq',
				prop: '\\propto',
				diamond: '\\diamond',
				square: '\\square',
				iff: '\\iff',

				sub: '\\subset',
				sup: '\\supset',
				sube: '\\subseteq',
				supe: '\\supseteq',
				uarr: '\\uparrow',
				darr: '\\downarrow',
				rarr: '\\rightarrow',
				rArr: '\\Rightarrow',
				larr: '\\leftarrow',
				lArr: '\\Leftarrow',
				harr: '\\leftrightarrow',
				hArr: '\\Leftrightarrow',
				aleph: '\\aleph',

				// Logic
				and: '\\land',
				or: '\\lor',
				not: '\\neg',
				'_|_': '\\bot',
				TT: '\\top',
				'|--': '\\vdash',
				'|==': '\\models',

				// Other functions
				'|__': '\\lfloor',
				'__|': '\\rfloor',

				'|~': '\\lceiling',
				'~|': '\\rceiling',

				// Arrows
				'>->': '\\rightarrowtail',
				'->>': '\\twoheadrightarrow',
				'>->>': '\\twoheadrightarrowtail'
			}
		});
	});

	async function solve() {
		$loading = true;
		let latex = value;
		let json = await fetch('https://apis.explosionscratc.repl.co/fetch', {
			method: 'POST',
			body: JSON.stringify({
				url: 'https://mathsolver.microsoft.com/cameraexp/api/v1/solvelatex',
				args: {
					headers: {
						accept: 'application/json',
						'content-type': 'application/json'
					},
					body: JSON.stringify({
						latexExpression: latex,
						clientInfo: {
							platform: 'web',
							mkt: 'en',
							skipGraphOutput: true,
							skipBingVideoEntity: true
						},
						customLatex: latex,
						showCustomResult: false
					}),
					referrer: `https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(
						latex
					)}`,
					referrerPolicy: 'strict-origin-when-cross-origin',
					method: 'POST'
				}
			})
		}).then((res) => res.json());
		result = JSON.parse(
			JSON.parse(json.json.results[0].tags[0].actions[0].customData).previewText
		).mathSolverResult;
		$loading = false;
	}
</script>

<svelte:head>
	<script src="https://unpkg.com/mathlive@0.73.4/dist/mathlive.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.css" />
	<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/katex.min.js"></script>
	<script
		defer
		src="https://cdn.jsdelivr.net/npm/katex@0.15.6/dist/contrib/auto-render.min.js"></script>
</svelte:head>
<div class="container">
	<div class="inner_container">
		<math-field
			on:input={(e) => (value = e.target.value)}
			bind:this={mathField}
			smart-mode
			defaultMode="math"
			virtual-keyboard-mode="manual"
		/>
		<button class="solve" on:click={solve}> Solve </button>
		<div class="result">
			{#if result}
				{#if result.isError}
					<span class="error">
						There was an error: {result.errorDisplayMessage ||
							result.errorMessage ||
							'Math invalid'}
					</span>
				{:else}
					<Result {result} />
				{/if}
			{:else}
				<div class="prompt_message">
					{#if mathField && mathField.value}
						Click solve to try to solve!
					{:else}
						Enter a math formula to solve!
					{/if}
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="less">
	@color: #088;
	:global(*::selection) {
		background: fade(@color, 10%) !important;
	}
	:global(*) {
		--highlight: fade(@color, 10%) !important;
	}
	.hoverfocus() {
		&:hover {
			box-shadow: 0 0 0 2px fade(@color, 20%);
		}
		&:focus {
			box-shadow: 0 0 0 4px fade(@color, 20%);
			outline: none;
		}
		&:hover:focus {
			box-shadow: 0 0 0 2px fade(@color, 20%), 0 0 0 4px fade(@color, 20%);
		}
	}
	* {
		box-sizing: border-box;
	}
	.container {
		margin: 3rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		overflow-y: scroll;
		:global(*) {
			transition-property: background-color, color, border-color, transform;
			transition-duration: 0.2s;
		}
	}
	.inner_container {
		max-width: 500px;
		width: 80vw;
		height: fit-content;
		@error: #c55;

		.error {
			padding: 10px 20px;
			background: fade(@error, 5%);
			width: 100%;
			border: 2px solid @error;
			border-radius: 4px;
			display: block;
			color: darken(@error, 15);
		}
		.prompt_message {
			font-weight: 100;
			color: fade(darken(@color, 15), 80%);
			text-align: center;
			font-size: 1.3rem;
			margin-top: 2rem;
			font-style: italic;
		}
		math-field,
		.solve {
			width: 100%;
			.hoverfocus();
			border-radius: 0.3rem;
			padding: 0 10px;
			border: 0.13rem dashed fade(@color, 5%);
		}
		math-field {
			border: 0.15rem solid @color;
		}
		.solve {
			margin-top: 0.5rem;
			margin-bottom: 1rem;
			padding: 0.5rem 1rem;
			background: fade(@color, 10%);
			cursor: pointer;
			&:focus,
			&:hover {
				color: white;
				background: @color;
				border-color: fade(lighten(@color, 20), 10%);
			}
			&:active {
				transform: scale(0.95);
			}
		}
	}
</style>
