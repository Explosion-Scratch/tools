<script>
	import notifications from '$helpers/toast.js';
	import ToastContainer from '$components/ToastContainer.svelte';
	import CryptoJS from 'crypto-js';
	let val = 'Hello world';
	$: hashed = Object.fromEntries(
		['MD5', 'SHA512', 'SHA256', 'SHA224', 'SHA3', 'SHA1', 'EvpKDF', 'RIPEMD160'].map((i) => [
			i,
			CryptoJS[i](val).toString()
		])
	);

	function copy(text) {
		navigator.clipboard.writeText(text).then(
			() => {
				notifications.show('Copied!');
			},
			() => (prompt('Copy: ', text), notifications.show('Copied!'))
		);
	}
</script>

<ToastContainer />
<h2>Hash calculator</h2>
<textarea bind:value={val} placeholder="Comma or space seperated list of numbers" />

{#if !Object.keys(hashed).length}
	<span class="nothing">No data given</span>
{/if}
{#each Object.entries(hashed) as [name, hash]}
	<div class="thing" on:click={() => copy(hash)}>
		{name}: <span class="result">{hash}</span>
		<button class="copy">
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
					fill="#4f4f4f"
					d="M220 40v144a4 4 0 0 1-8 0V44H72a4 4 0 0 1 0-8h144a4 4 0 0 1 4 4Zm-32 32v144a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V72a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4Zm-8 4H44v136h136Z"
				/></svg
			>
		</button>
	</div>
{/each}

<style>
	* {
		transition: all 0.2s ease;
		box-sizing: border-box;
	}
	h2 {
		text-align: center;
		padding-top: 10vh;
	}
	textarea {
		min-height: 100px;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	}
	.nothing {
		margin-top: 20px;
		font-size: 1.3rem;
		font-weight: 200;
		font-style: italic;
		color: #666;
	}
	textarea:focus,
	textarea:hover {
		outline: none;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
	}
	:global(body) {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.thing,
	h2,
	textarea {
		width: 80vw;
		max-width: 500px;
		margin: 5px auto;
	}

	.thing {
		color: #333;
		font-weight: 200;
		padding: 10px 20px;
		border-radius: 4px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
		cursor: pointer;
		position: relative;
		display: flex;
	}
	.result {
		color: #666;
		font-weight: 600;
		margin-left: 10px;
		white-space: nowrap;
		overflow: hidden;
		width: calc(100% - 100px);
		text-overflow: ellipsis;
	}
	.thing:active {
		transform: scale(0.96);
	}
	.thing button svg {
		width: 15px;
		height: 15px;
	}
	.thing button {
		opacity: 0;
		display: flex;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
		background: transparent;
		border: 1px solid #0001;
	}
	.thing:hover button {
		opacity: 1;
	}
	.thing:hover {
		box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	}
</style>
