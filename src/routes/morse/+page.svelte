<script>
	import morse, { encrypt, decrypt } from '$helpers/morse.js';
	let input = '';
	$: encrypted = encrypt(input);
	$: decrypted = decrypt(input);
</script>

<div class="container">
	<h2>Encrypt or decrypt morse code</h2>
	<input bind:value={input} placeholder="Encrypt or decrypt morse code" />
	{#if !decrypted.length}
		<textarea readonly value={encrypted} placeholder="The output will show up here" />
	{:else}
		<textarea readonly value={decrypted} placeholder="The output will show up here" />
	{/if}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		min-height: 100vh;
	}
	input,
	textarea {
		width: 80vw;
		max-width: 500px;
		margin: 5px auto;
		border: 1px solid #0001;
		box-shadow: 2px 2px 5px #0001;
		padding: 10px 20px;
		border-radius: 3px;
	}
	textarea {
		-webkit-user-select: all; /* Chrome all / Safari all */
		-moz-user-select: all; /* Firefox all */
		-ms-user-select: all; /* IE 10+ */
		user-select: all;
	}
	:is(input, textarea):focus {
		outline: none;
		box-shadow: 0 0 0 2px #0001;
	}
</style>
