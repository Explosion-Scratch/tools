<script>
	import Nav from '$components/Nav.svelte';
</script>

<Nav />

<slot />

<style>
	:global(html, body, .reset) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(::selection) {
		background: #0001;
	}
	:global(html) {
		font-family: 'Work Sans', Roboto, Montserrat, 'Lucida Sans', 'Lucida Sans Regular',
			'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
	:global(textarea, input, select) {
		font-family: 'Work Sans', Roboto, Montserrat, 'Lucida Sans', 'Lucida Sans Regular',
			'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		padding: 0.5rem 1rem;
	}
	:global(body) {
		min-height: 100vh;
	}
</style>
