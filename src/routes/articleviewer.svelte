<script>
	import { format } from 'date-fns';
	import PDF from '$components/PDF.svelte';
	import TippyStyles from '$components/TippyStyles.svelte';
	import ToastContainer from '$components/ToastContainer.svelte';
	import tooltip from '$helpers/tooltip.js';
	let page = 'input';
	import notifications from '$helpers/toast';
	import { copy } from 'bijou.js';
	import { loading } from '../store.js';
	let url;
	let doi = '10.1126/science.169.3946.635';
	let article, blob;
	import { onMount } from 'svelte';

	onMount(() => {
		const params = new URLSearchParams(location.search);
		if (params.get('doi')) {
			doi = params.get('doi');
			getArticle();
		}
	});
	async function getArticle(_doi) {
		blob = null;
		if (_doi){
			doi = _doi
		}
		// TODO: Doi regex
		if (!doi.match(/^10.\d{4,9}\/[-\._;\(\)\/:A-Z0-9]+$/i)) {
			let doi2 = doi.match(/(10[.][0-9]{4,}[^\s"/<>]*\/[^\s"<>]+)/)[1];
			if (doi2) {
				doi = doi2;
				return getArticle();
			}
			page = 'input';
			return notifications.show('Invalid DOI');
		}
		$loading = true;
		page = 'article';
		article = await fetch(`https://doi.org/${doi}`, {
			headers: { accept: 'application/json' }
		}).then((r) => r.json());
		url = await getUrl(doi);
		let p = new URLSearchParams(location.search);
		let u = new URL(location.href);
		p.set('doi', doi);
		u.search = p;
		history.replaceState({}, '', u);
		console.log({ url, article, doi });
		fetch(`https://cors.explosionscratc.repl.co/${url.split("//")[1]}`).then(r => r.blob()).then(b => {
			//Create blob URL
			blob = URL.createObjectURL(blob);
		});
		$loading = false;
	}
	async function getUrl(e) {
		let t = [
				'sci-hub.ee',
				// 'sci-hub.st',
				// 'sci.hubg.org',
				'sci-hub.se'
				// 'sci-hubtw.hkvisa.net',
				// 'sci-hub.hkvisa.net',
				// 'sci-hub.mksa.top'
			],
			s = 'https://cors.explosionscratc.repl.co/';
		return await Promise.any(
			t.map(
				(e) =>
					new Promise((t, c) => {
						fetch(`${s}${e}`)
							.then((s) => (200 === s.status ? t(e) : c()))
							.catch(c);
					})
			)
		).then((t) =>
			(async function (e, t) {
				console.log({ domain: e, doi: t });
				let c = await fetch(`${s}${e}/${t}`).then((e) => e.text());
				return new DOMParser().parseFromString(c, 'text/html').querySelector('iframe, embed')?.src;
			})(t, e)
		);
	}
	function cpy(text, label) {
		copy(text);
		notifications.show(`Copied ${label}`);
	}
</script>

<ToastContainer />
<TippyStyles />
<div class="outer">
	{#if page === 'article' && article?.DOI}
		<div class="container">
			<div class="frontMatter">
				<div id="top">
					<span
						on:click={() =>
							cpy(format(new Date(article.created['date-time']), 'MMMM qo, y'), 'date')}
						id="date"
						use:tooltip={`Published on ${format(
							new Date(article.created['date-time']),
							'MMMM qo, y'
						)} in ${article.publisher}`}
					>
						{format(new Date(article.created['date-time']), 'MMMM qo, y')}
					</span>
					•
					<span id="doi" use:tooltip={'Click to copy'} on:click={() => cpy(article.DOI, 'DOI')}>
						{article.DOI}
					</span>
					•
					<span id="link"
						><a href={article.link[0].URL} use:tooltip={article.link[0].URL}>View original</a></span
					>
				</div>
				<h2 class="title">
					{article.title}
					{#if url}
						<a class="open" href={blob || url} use:tooltip={'Open PDF in a new tab'} target="_blank"
							><svg
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
									d="M200 216a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V88a8 8 0 0 1 16 0v120h152a8 8 0 0 1 8 8Zm30.2-106.9a.8.8 0 0 0 .2-.4l.2-.3l.3-.3l.2-.3c0-.2.1-.3.1-.4l.2-.3c0-.2.1-.3.1-.4l.2-.4a.8.8 0 0 1 .1-.4v-.3a.9.9 0 0 0 .1-.5a.4.4 0 0 1 .1-.3v-1.6a.4.4 0 0 1-.1-.3a.9.9 0 0 0-.1-.5v-.3a.8.8 0 0 1-.1-.4l-.2-.4c0-.1-.1-.2-.1-.4l-.2-.3c0-.1-.1-.2-.1-.4l-.2-.3l-.3-.3l-.2-.3a.8.8 0 0 0-.2-.4c-.1-.1-.3-.2-.4-.4a.3.3 0 0 1-.1-.2l-48-48a8.1 8.1 0 0 0-11.4 11.4L204.7 96H168a103.9 103.9 0 0 0-100.7 78a8 8 0 0 0 5.7 9.7l2 .3a8.1 8.1 0 0 0 7.8-6a87.9 87.9 0 0 1 85.2-66h36.7l-34.4 34.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0l48-48a.3.3 0 0 1 .1-.2c.1-.2.3-.3.4-.4Z"
								/></svg
							></a
						>
					{/if}
				</h2>
				{#if article.subtitle?.[0]}<span class="subtitle">{article.subtitle[0]}</span>{/if}
				<div class="info">
					<span class="authors">
						{#each article.author as author, i}
							<span
								class="author"
								use:tooltip={`${author.given} ${author.family} - ${author.affiliation
									.map((i) => i.name)
									.join(', ')}`}>{author.given} {author.family}</span
							>{#if i < article.author.length - 1} • {/if}
						{/each}
					</span>
				</div>
			</div>
			{#if url}
				<div class="pdf">
					<PDF url={'https://cors.explosionscratc.repl.co/' + url.split('//')[1]} />
				</div>
			{/if}
		</div>
	{:else if page === 'input'}
		<h2 class="title">Paste DOI here</h2>
		<input
			on:paste={(e) => getArticle(e.clipboardData.getData("text/plain"))}
			on:keyup={({ key }) => key === 'Enter' && getArticle()}
			bind:value={doi}
			placeholder="DOI here, e.g. 10.1126/science.169.3946.635"
		/>
		<button on:click={getArticle}>Go!</button>
	{/if}
</div>

<style lang="less">
	* {
		box-sizing: border-box;
	}
	.open {
		color: #999;
	}
	input {
		padding: 8px 20px;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		border: 1px solid #0001;
		box-shadow: 2px 2px 4px #0001;
	}
	button {
		width: 100%;
		max-width: 500px;
		background: #0001;
		color: #666;
		cursor: pointer;
		padding: 8px 20px;
		margin: 10px auto;
		border: none;
		border: 1px solid #0001;
		box-shadow: 2px 2px 4px #0001;
	}
	input:focus {
		outline: none;
	}
	input:focus,
	input:hover {
		box-shadow: 2px 2px 4px #0001, 0 0 2px #0001;
	}
	.outer {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		min-height: 100vh;
	}
	.title {
		font-weight: 200;
		font-size: 2rem;
		margin-bottom: 0.3rem;
	}
	.subtitle {
		display: block;
		margin-bottom: 1rem;
		color: #666;
	}

	.container {
		margin-inline: auto;
		max-width: 600px;
		padding: 3rem 5rem;
		.frontMatter {
			#top {
				font-size: 1.1rem;
				font-style: italic;
				color: #999;
				a {
					text-decoration: none;
					border-bottom: 1px dashed #0001;
					color: inherit;
				}
			}
			.author {
				font-weight: 200;
				font-size: 1.2rem;
			}
		}
		.pdf {
			margin-top: 20px;
			width: 100%;
		}
	}
</style>
