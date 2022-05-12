<script>
	import C from '$components/CodeEditor.svelte';
	import Toast from '$components/ToastContainer.svelte';
	import notifications from '$helpers/toast.js';
	import TippyStyles from '$components/TippyStyles.svelte';
	import tooltip from '$helpers/tooltip.js';
	import shortcuts from '$helpers/shortcuts.js';
	import html2canvas from 'html2canvas';
	import LZString from 'lz-string';

	let actions = new Proxy(
		{},
		{
			get() {
				return () => {};
			}
		}
	);
	let code = `
	/*
	Keyboard shortcuts:
	Control + M:          Minify
	Control + B:          Beautify
	Control + C:          Copy all code (or selection)
	Control + Enter:      Beautify code
	Control + S:          Save code
	Control + Escape:     Clear editor
	Control + I:          Screenshot code (I for image)
	*/`
		.trim()
		.split('\n')
		.map((i) => i.trim())
		.join('\n');

	import { onMount } from 'svelte';

	let codeUpdate = () => {};

	onMount(() => {
		console.log(LZString);
		codeUpdate = ({ code: newCode, updateCursor = true, ...other }) => {
			let cursor = {};
			if (updateCursor) {
				if (!window.CODEJAR_EDITOR && window.CODEJAR_EDITOR.save) {
					return;
				}
				cursor = window.CODEJAR_EDITOR.save();
			}
			code = newCode;
			if (updateCursor) {
				console.log({ ...cursor, ...other });
				window.CODEJAR_EDITOR.restore({ ...cursor, ...other });
			}
		};

		console.log('Mounted');
		// Fixes some weird error with svelte "error1"
		codeUpdate({
			code: LZString.decompressFromEncodedURIComponent(location.hash.replace(/^#/, '')) || code,
			updateCursor: false
		});
		actions = { format, min, copy, updated, download, screenshot };
		window.actions = actions;
		console.log({ actions });
		setInterval(() => {
			location.hash = LZString.compressToEncodedURIComponent(code);
		}, 100);

		async function screenshot() {
			document.body.classList.add('screenshot');
			notifications.show('Screenshotting');
			let canvas = await html2canvas(document.body);
			canvas.toBlob((a) => window.open(URL.createObjectURL(a)), 'image/png');
			document.body.classList.remove('screenshot');
		}

		async function min() {
			try {
				let out = await window.Terser.minify(code);
				// Basically using prettier as a syntax checker here
				window.prettier.format(code, {
					parser: 'babel',
					plugins: window.prettierPlugins
				});

				codeUpdate({ code: out.code });
			} catch (e) {
				notifications.show("Couldn't minify code");
			}
		}

		async function format() {
			console.log('Formatting');
			try {
				let { start, end, dir } = window?.CODEJAR_EDITOR?.save();
				if (start === undefined || end === undefined) {
					throw new Error("Couldn't save cursor pos");
				}
				console.log({ start, end, dir, code });
				let formatted = window.prettier.formatWithCursor(code, {
					parser: 'babel',
					plugins: window.prettierPlugins,
					cursorOffset: start
				});
				console.log('Did stuff');
				codeUpdate({
					code: formatted.formatted,
					start: formatted.cursorOffset,
					end: formatted.cursorOffset
				});
				notifications.show('Beautified');
			} catch (e) {
				notifications.show("Couldn't beautify code");
			}
		}
		function updated({ detail: { detail } }) {
			codeUpdate({ code: detail });
		}
		function copy() {
			if (window.getSelection().toString().trim()?.length) {
				const a = () => notifications.show('Copied selection');
				navigator.clipboard.writeText(window.getSelection().toString()).then(a, () => {
					prompt('Copy the code below: ', window.getSelection().toString());
					a();
				});
				return;
			}
			let text = code;
			navigator.clipboard.writeText(text).then(n, () => {
				prompt('Copy the code below: ', text);
				n();
			});

			function n() {
				notifications.show(`Copied code!`);
			}
		}
		function download(data, filename, type) {
			var file = new Blob([data], { type: type });
			if (window.navigator.msSaveOrOpenBlob)
				// IE10+
				window.navigator.msSaveOrOpenBlob(file, filename);
			else {
				// Others
				var a = document.createElement('a'),
					url = URL.createObjectURL(file);
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				setTimeout(function () {
					document.body.removeChild(a);
					window.URL.revokeObjectURL(url);
				}, 0);
			}
			notifications.show(`Saved ${filename}`);
		}
	});

	async function paste(e) {
		console.log(code, e, e.clipboardData.getData('text/plain'));
		/\/\*([\s\S]*?)\*\/$/.test(code.replace(e.clipboardData.getData('text/plain'), '')) &&
			(e.preventDefault(), codeUpdate({ code: e.clipboardData.getData('text/plain') }));

		// await new Promise((r) => setTimeout(r, 100));
		console.log('Formatting (paste ev)');
		actions.format();
		let offset = code.length;
		setTimeout(() => window.CODEJAR_EDITOR.restore({ start: offset, end: offset }));
		console.log('Set cursor at end', offset);
	}
</script>

<TippyStyles />
<svelte:window on:paste={paste} />
<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/standalone.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/prettier/2.6.2/parser-babel.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/source-map@0.7.3/dist/source-map.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/terser/dist/bundle.min.js"></script>
</svelte:head>

<Toast />
<C bind:code on:change={actions.updated} />
<div class="buttons hidden-print">
	<button
		use:shortcuts={{ control: true, code: 'KeyM' }}
		on:click={actions.min}
		alt="Minify"
		use:tooltip={{ content: 'Minify', placement: 'left' }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--uil"
			width="32"
			height="32"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M12 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1Zm-1.29 6.29l-2.5-2.5a1 1 0 1 0-1.42 1.42l.8.79H3a1 1 0 0 0 0 2h4.59l-.8.79a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.5-2.5a1 1 0 0 0 .21-.33a.94.94 0 0 0 0-.76a1 1 0 0 0-.21-.33ZM21 11h-4.59l.8-.79a1 1 0 0 0-1.42-1.42l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-.8-.79H21a1 1 0 0 0 0-2Z"
			/></svg
		>
	</button>
	<button
		use:shortcuts={{ control: true, code: 'Enter' }}
		use:shortcuts={{ control: true, code: 'KeyB' }}
		on:click={actions.format}
		alt="Beautify"
		use:tooltip={{ content: 'Beautify', placement: 'left' }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--ic"
			width="32"
			height="32"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4zm5.2 0l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4z"
			/></svg
		>
	</button>
	<button
		class="sm"
		use:shortcuts={{ control: true, code: 'KeyC' }}
		on:click={actions.copy}
		alt="Copy"
		use:tooltip={{ content: 'Copy', placement: 'left' }}
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
				fill="currentColor"
				d="M232 36v140a12 12 0 0 1-24 0V48H80a12 12 0 0 1 0-24h140a12 12 0 0 1 12 12Zm-40 40v140a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V76a12 12 0 0 1 12-12h140a12 12 0 0 1 12 12Zm-24 12H52v116h116Z"
			/></svg
		>
	</button>
	<button
		class="sm"
		use:shortcuts={{ control: true, code: 'KeyS' }}
		on:click={() => actions.download(code, 'code.js', 'application/javascript')}
		alt="Save"
		use:tooltip={{ content: 'Save', placement: 'left' }}
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
				fill="currentColor"
				d="M47.5 112.5a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.5-51.5a12 12 0 0 1 17 17l-72 72a12.1 12.1 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z"
			/></svg
		>
	</button>
	<button
		class="sm"
		use:shortcuts={{ control: true, code: 'KeyI' }}
		on:click={() => actions.screenshot()}
		alt="Screenshot"
		use:tooltip={{ content: 'Screenshot', placement: 'left' }}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			role="img"
			class="iconify iconify--bx"
			width="32"
			height="32"
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h3v-2H5v-2H3v3a1 1 0 0 0 1 1zM19 4a1 1 0 0 0-1-1h-3v2h2v2h2V4zM5 5h2V3H4a1 1 0 0 0-1 1v3h2V5zM3 9h2v4H3zm14 0h2v3h-2zM9 3h4v2H9zm0 14h3v2H9z"
			/></svg
		>
	</button>
	<button
		class="sm"
		use:shortcuts={{ control: true, code: 'Escape' }}
		on:click={() => codeUpdate({ code: '' })}
		alt="Clear"
		use:tooltip={{ content: 'Clear', placement: 'left' }}
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
				fill="currentColor"
				d="M216 36H68.5a20 20 0 0 0-17.1 9.7L5.7 121.8a12 12 0 0 0 0 12.4l45.7 76.1a20 20 0 0 0 17.1 9.7H216a20.1 20.1 0 0 0 20-20V56a20.1 20.1 0 0 0-20-20Zm-4 160H70.8L30 128l40.8-68H212Zm-108.5-52.5L119 128l-15.5-15.5a12 12 0 0 1 17-17L136 111l15.5-15.5a12 12 0 0 1 17 17L153 128l15.5 15.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0L136 145l-15.5 15.5a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17Z"
			/></svg
		>
	</button>
</div>

<style lang="less">
	* {
		transition: all 0.2s ease;
	}
	:global(*::selection) {
		background: #0001;
	}
	:global(body) {
		margin: 0;
		padding: 0;
	}
	:global([id*='code_editor']) {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		padding: 20px;
	}
	.buttons {
		position: fixed;
		top: 0;
		right: 0;
	}
	button {
		display: flex;
		background: transparent;
		border: none;
		color: #666;
		svg {
			width: 20px;
			height: 20px;
			cursor: pointer;
			&:active {
				transform: scale(0.9);
			}
		}
	}
	.sm svg {
		width: 15px;
		height: 15px;
	}

	:global(.screenshot) {
		:global(#code_editor_container [id*='code_editor_']) {
			width: 100% !important;
		}
		:global(#code_editor_container) {
			display: block;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			border: 1px solid #0001;
			border-radius: 0.3rem;
			width: 80vw;
			height: 80vh;
			box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
			background: #fff;
		}
		:global(body),
		&:is(body) {
			background: linear-gradient(
				to right,
				rgb(199, 210, 254),
				rgb(254, 202, 202),
				rgb(254, 249, 195)
			);
		}
	}
</style>
