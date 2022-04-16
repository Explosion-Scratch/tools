<script context="module">
	import tools from '../tools.json';
	export async function load({ params, fetch }) {
		let found = tools.find((i) => i.id.toLowerCase() === params.path.toLowerCase());
		if (!found) {
			throw new Error('Page not found');
		}
		let { default: component } = await import(`../tools/${found.file.split('.')[0]}.svelte`);
		return {
			props: {
				component
			}
		};
	}
</script>

<script>
	export let component = null;
</script>

<svelte:component this={component} />
