<script>
	import { base } from '$app/paths';
</script>

<div class="wrap">
	<iframe src="{base}/bellman-ford-visualizer.html" title="Bellman Ford algorithm visualizer" />
</div>

<style>
	.wrap {
		position: fixed;
		inset: 0;
	}
	iframe {
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
