<script>
	import EP from '$components/EmojiPicker.svelte';
	import ToastContainer from '$components/ToastContainer.svelte';
	import smoothfit from '$helpers/smoothfit.js';
</script>

<ToastContainer />

<div class="container" use:smoothfit={'.measure'}>
	<div class="measure">
		<EP />
	</div>
</div>

<style>
	.container {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80vw;
		max-width: 500px;
		padding: 10px;
		border-radius: 5px;
		transition: height 0.5s ease;
		overflow: hidden !important;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	}
</style>
