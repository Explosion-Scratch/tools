<script>
	/* 	{
		"name": "Scientific article viewer",
		"description": "A viewer for scientific articles based on DOI.",
		"id": "articleviewer"
	},
 */
	import { format } from 'date-fns';
	import PDF from '$components/PDF.svelte';
	import TippyStyles from '$components/TippyStyles.svelte';
	import ToastContainer from '$components/ToastContainer.svelte';
	import tooltip from '$helpers/tooltip.js';
	let page = 'input';
	import notifications from '$helpers/toast';
	import { copy } from 'bijou.js';
	import { onMount } from 'svelte';
	import { loading } from '../store.js';
	let url;
	let doi = '10.1126/science.169.3946.635';
	let article;
	async function getArticle() {
		// TODO: Doi regex
		$loading = true;
		article = await fetch(`https://doi.org/${doi}`, {
			headers: { accept: 'application/json' }
		}).then((r) => r.json());
		url = await getUrl(doi);
		console.log({ url, article, doi });
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
				</h2>
				{#if article.subtitle}<span class="subtitle">{article.subtitle[0]}</span>{/if}
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
		<input bind:value={doi} placeholder="DOI here, e.g. 10.1126/science.169.3946.635" />
		<button on:click={getArticle}>Go!</button>
	{/if}
</div>

<style lang="less">
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
