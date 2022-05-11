<script>
	export let title = '';
	export let author = 'Explosion-Scratch';
	export let keywords = '';
	export let language = 'English';
	export let color = '#00bbbb';
	export let image = '';
	export let site = '';

	/**
	 * Generate a meta tags object [{attributeName: attributeContent}]
	 * @param meta
	 * @param String meta.title The title of the page
	 * @param String meta.author The author
	 * @param String [meta.keywords=""] The keywords
	 * @param String [meta.language=""] The language of the page
	 * @param String [meta.description=meta.title] The description of the page
	 * @param String meta.color The theme color
	 * @param String [meta.site=meta.title] The site name
	 * @param String meta.image The URL for the image for the site
	 * @returns Array.<Object>
	 */
	const generate = (meta) => {
		return [
			{ charset: 'utf-8' },
			{ lang: 'en' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'title', content: meta.title },
			{ name: 'author', content: meta.author },
			{
				name: 'keywords',
				content: meta.keywords || ''
			},
			{ name: 'robots', content: 'index,follow' },
			{ name: 'language', content: meta.language || 'English' },
			{ name: 'description', content: meta.description || meta.title },
			{ name: 'theme-color', content: meta.color },
			{ name: 'og:type', content: 'website' },
			{ name: 'apple-mobile-web-app-title', content: meta.title },
			{ name: 'og_site_name', content: meta.site || meta.title },
			{ name: 'og:site_name', content: meta.site || meta.title },
			{ name: 'og:locale', content: 'en_US' },
			{ name: 'og:url', content: meta.url },
			{ name: 'og:title', content: meta.title },
			{ name: 'og:description', content: meta.description },
			{ name: 'og:image', content: meta.image },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:url', content: meta.url },
			{ name: 'twitter:title', content: meta.title },
			{ name: 'twitter:description', content: meta.description },
			{ name: 'twitter:image', content: meta.image }
		];
	};

	let tags = generate({
		title,
		author,
		keywords,
		language,
		color,
		image,
		site
	});
</script>

{#each tags as tag}
	<meta {...tag} />
{/each}
