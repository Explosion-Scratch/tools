<script>
	import { loading } from '../store.js';
	import Result from '$components/MathResult.svelte';
	let result = null;
	let value = String.raw`x = 3, y = x^2`;
	let mathField = null;

	import { onMount } from 'svelte';
	let _r = {};

	onMount(() => {
		window.mathField = mathField;
		mathField.setValue(new URLSearchParams(location.search).get('q') || value);
		if (new URLSearchParams(location.search).get('q')) {
			setTimeout(solve);
		}
		mathField.setOptions({
			...mathField.getOptions(),
			smartSuperscript: true,
			onKeystroke(mf, key, ev) {
				if (key === 'ctrl+[KeyA]') {
					mf.executeCommand('selectAll');
				}
				const START = String.raw`\left.\begin{cases}`;
				const ENDCASES = String.raw`\end{cases}\right.`;
				const PLACEHOLDER = String.raw`\placeholder{New equation}`;
				const END = String.raw`\\{${PLACEHOLDER}}${ENDCASES}`;

				if (key === 'shift+[Enter]') {
					let val = mathField.value;
					if (!val.startsWith(START)) {
						let pos = mathField.position;
						mf.setValue(START + `{${mathField.value}}` + END);
						mathField.position = pos + 7;
					} else {
						console.log({ START, ENDCASES }, val.includes(ENDCASES));
						let current = val
							.replace(new RegExp(`^${escr(START)}`), '')
							.replace(new RegExp(`${escr(ENDCASES)}$`), '');
						console.log(current);
						mf.setValue(`${START}${current}${END}`);
					}
				}
				function escr(string) {
					return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				}
				if (key === '[Backspace]') {
					if (mathField.value === String.raw`\left.\begin{cases}{}\end{cases}\right.`) {
						mathField.setValue('');
						return;
					}
					let val = mathField.value;
					let ending = String.raw`\\ {}`;
					console.log(
						{ val },
						val.startsWith(START),
						val.endsWith(ending + ENDCASES),
						ending + ENDCASES
					);
					if (
						val.startsWith(START) &&
						(val.endsWith(ending + ENDCASES) || val.endsWith(ending + ' ' + ENDCASES))
					) {
						let current = val
							.replace(new RegExp(`^${escr(START)}`), '')
							.replace(new RegExp(`${escr(ending)}[ \\\\]*${escr(ENDCASES)}$`), '');
						console.log(current);
						let pos = mathField.position;
						mathField.setValue(`${START}${current}${ENDCASES}`);
						mathField.position = pos - 3;
					}
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
		let json = await getresult(latex);
		result = JSON.parse(
			JSON.parse(json.json.results[0].tags[0].actions[0].customData).previewText
		).mathSolverResult;
		_r = JSON.parse(json.json.results[0].tags[0].actions[0].customData);
		console.log(_r);
		let u = new URL(location);
		let s = new URLSearchParams(location.search);
		s.set('q', result.detectedLatex);
		u.search = s;
		history.pushState({ result }, 'Math solver', u);
		$loading = false;
	}

	async function getresult(problem) {
		const muidb = await fetch('https://apis.explosionscratc.repl.co/fetch', {
			method: 'POST',
			body: JSON.stringify({
				url: `https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(problem)}`,
				args: {
					headers: {
						'User-Agent': `Mozilla/5.0 (X11; CrOS x86_64 14909.100.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36`,
						origin: `https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(
							problem
						)}`
					}
				}
			})
		})
			.then((a) => a.json())
			.then((j) => j.headers['set-cookie'].split('=')[1].split(';')[0]);
		return await fetch('https://apis.explosionscratc.repl.co/fetch', {
			method: 'POST',
			body: JSON.stringify({
				url: 'https://mathsolver.microsoft.com/cameraexp/api/v1/solvelatex',
				args: {
					method: 'POST',
					headers: {
						accept: 'application/json',
						'accept-language': 'en-US,en;q=0.9',
						'cache-control': 'no-cache',
						'content-type': 'application/json',
						pragma: 'no-cache',
						'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
						'sec-ch-ua-mobile': '?0',
						'sec-ch-ua-platform': '"Chrome OS"',
						'sec-fetch-dest': 'empty',
						'sec-fetch-mode': 'cors',
						'sec-fetch-site': 'same-origin',
						cookie: `MUIDB=${muidb};MicrosoftApplicationsTelemetryFirstLaunchTime=${new Date(
							new Date() - Math.random() * 48 * 60 * 60 * 1000
						).toISOString()}`,
						Referer: `https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(
							problem
						)}`,
						origin: `https://mathsolver.microsoft.com/en/solve-problem/${encodeURIComponent(
							problem
						)}`,
						'User-Agent': `Mozilla/5.0 (X11; CrOS x86_64 14909.100.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36`,
						'Referrer-Policy': 'strict-origin-when-cross-origin'
					},
					body: JSON.stringify({
						latexExpression: problem,
						clientInfo: {
							platform: 'web',
							mkt: 'en',
							skipGraphOutput: true,
							skipBingVideoEntity: true
						},
						customLatex: problem,
						showCustomResult: false
					})
				}
			})
		}).then((a) => a.json());
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
				{#if result.isError || _r.isError}
					<span class="error">
						There was an error: {_r.errorMessage ||
							result.errorDisplayMessage ||
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
		padding: 5px;
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
