<script context="module">
	export const prerender = false;
</script>

<script>
	// npm i -D codejar prismjs
	// Use on:codeUpdate={({detail: code, target}) => console.log("Code updated to ", code, "Element: ", target)}
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let code = '';
	import Prism from 'prismjs';
	export let id = Math.random().toString(36).slice(2);

	id = `code_editor_${id}`;

	async function codedit(node, { code, autofocus = false, loc = false, ...options }) {
		const { CodeJar } = await import('https://cdn.jsdelivr.net/npm/codejar@3.6.0/codejar.min.js');
		const hl = function (el) {
			let lang = options.language?.toLowerCase() || 'javascript';
			el.innerHTML = Prism.highlight(el.textContent, Prism.languages[lang], lang);
		};
		const highlight = hl;

		const editor = CodeJar(node, highlight, options);

		editor.onUpdate((code) => fire(node, 'change', code));

		function update({ code, autofocus = false, loc = false, ...options }) {
			if (code !== editor.toString()) {
				editor.updateOptions(options);
				editor.updateCode(code);
			}
		}

		update({ code, ...options });

		autofocus && node.focus();

		return {
			update,
			destroy() {
				editor.destroy();
			}
		};
	}

	function fire(el, name, detail) {
		dispatch(name, { detail, target: el });
	}
</script>

<div {id} use:codedit={{ code, $$restProps }} />
<svelte:head
	><link
		rel="stylesheet"
		href="https://rawcdn.githack.com/PrismJS/prism-themes/e224a6fd2e94ccb4a6f72e45ac2ee9d82a8da6cb/themes/prism-base16-ateliersulphurpool.light.css"
	/></svelte:head
>

<style>
	div {
		background: #00000009;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
