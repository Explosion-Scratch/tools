<script>
	import InputWithButton from 'src/components/InputWithButton.svelte';
	let encoded = '';
	let textareaValue = '';
	function changed() {
		encoded = btoa(textareaValue);
	}
</script>

<InputWithButton bind:value={textareaValue} on:change={changed} type="textarea" />
<textarea>
	{encoded}
</textarea>
