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
				component,
				tool: found
			}
		};
	}
</script>

<script>
	import SEO from '$components/SEO.svelte';
	export let component = null;
	export let tool = {};
</script>

<svelte:head>
	<SEO
		title={tool.title}
		keywords="code,javascript,{tool.keywords || tool.id}"
		site="Explosion's Tools"
		color="#a7c9d9"
	/>
</svelte:head>
<svelte:component this={component} />
