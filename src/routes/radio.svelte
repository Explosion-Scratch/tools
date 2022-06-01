<script>
	import Tags from '$components/Tags.svelte';
	import { loading } from '../store.js';
	import toast from '$helpers/toast.js';
	import ToastContainer from '$components/ToastContainer.svelte';
	import SlideButton from '$components/SlideButton.svelte';
	import inview from '$helpers/inview.js';
	const BASE_HOST = 'all.api.radio-browser.info';
	let audio,
		server,
		stations = [],
		offset = 0,
		recentStations = [{}],
		loadingStations = false,
		currentStation,
		stationList,
		tagList,
		tags = [];

	import { onMount } from 'svelte';
	onMount(async () => {
		console.log('mounted');
		$loading = true;
		if (localStorage.server) {
			server = localStorage.server;
		} else {
			server = await getServers().then((i) => i[0]);
			localStorage.setItem('server', server);
		}
		tagList = await apiReq('tags', { hidebroken: true });
		$loading = false;
		initStations();
	});
	async function getStations(limit, offset = 0) {
		console.log(tags);
		console.log({ limit, offset });
		let stations = [];
		let i = 1;
		while (stations.length < limit) {
			let en = await apiReq('stations/search', {
				limit: 20,
				offset: i++ * 20 + offset,
				hidebroken: true,
				codec: 'mp3',
				countrycode: 'us',
				is_https: 'true',
				language: 'english',
				languageExact: 'true',
				order: 'votes',
				...(tags?.length && { tagExact: true, tag: tags.join('') })
			});
			if (!en.length) {
				// Remove most filters and try one last time
				stations.push(
					...(await apiReq('stations/search', {
						limit: 20,
						hidebroken: true,
						codec: 'mp3',
						order: 'votes',
						...(tags?.length && { tagExact: true, tag: tags.join('') })
					}))
				);
				break;
			}
			stations.push(...en);
		}

		return { stations, offset: offset + i * 20 };
	}
	function apiReq(route, params = {}) {
		return fetch(`https://${server}/json/${route}?${new URLSearchParams(params).toString()}`).then(
			(r) => r.json()
		);
	}
	function getServers() {
		return dns({ name: BASE_HOST }).then((ips) =>
			Promise.all(ips.map(reverse)).then((servers) => servers.map((i) => i[0]))
		);
	}
	function reverse(ip) {
		return dns({
			name: ip.split('.').reverse().join('.') + '.in-addr.arpa',
			type: 'PTR'
		}).then((data) => data.map((i) => i.slice(0, -1)));
	}
	function dns({ name, type = 'A' }) {
		if (!name) {
			throw new Error('No name passed');
		}
		return fetch(
			`https://cloudflare-dns.com/dns-query?${new URLSearchParams({
				name,
				type
			})}`,
			{
				headers: {
					accept: 'application/dns-json'
				}
			}
		)
			.then((r) => r.json())
			.then((json) => json.Answer.map((i) => i.data));
	}

	function play(station) {
		if (audio) {
			audio.pause();
		}
		currentStation = station;
		audio.src = station.url_resolved;
		$loading = true;
		audio.onload = () => {
			$loading = false;
			currentStation = null;
			toast.show(`Now playing ${station.name}`);
		};
		audio.onerror = () => {
			$loading = false;
			currentStation = null;
			toast.show("Couldn't play this station");
		};
		audio.oncanplay = () => {
			$loading = false;
		};
		audio.onplay = () => {
			console.log({ currentStation });
		};
		audio.play();
	}

	function loadStations() {
		console.log({ loadingStations, currentStation, recentStations, stations });
		if (loadingStations || !recentStations.length) {
			return;
		}
		loadingStations = true;
		getStations(10, offset).then(({ stations: newStations, offset: off }) => {
			recentStations = [...newStations];
			console.log({ stations, off, newStations, recentStations, length: recentStations.length });
			offset = off;
			stations = [...stations, ...newStations];
			loadingStations = false;
		});
	}
	function handleTags({ detail: { tags: _tags } }) {
		tags = _tags;
		stations = [];
		initStations();
	}
	async function initStations() {
		while (stationList.scrollHeight === stationList.clientHeight) {
			await loadStations();
			await new Promise((r) => setTimeout(r, 200));
		}
		loadStations();
	}
</script>

<ToastContainer />
<!-- Iterate over stations and display each -->
<div class="radio_container">
	{#if !currentStation}
		<h2 class="header">Radio</h2>
		<span id="subtext">Click on a station to start playing it!</span>
	{/if}
	<div class="current">
		{#if currentStation}
			<h2 class="title">
				{#if currentStation.favicon}<img
						src={currentStation.favicon}
						alt="Icon for {currentStation.name}"
						on:error={(e) => e.target.remove()}
						class="favicon"
					/>{/if}
				{currentStation.name}
			</h2>
			<div class="info">
				<a
					id="view_homepage"
					href={currentStation.homepage}
					alt="Homepage for {currentStation.name}">View homepage</a
				>
				•
				<span id="last_modified"
					>Modified: {new Intl.DateTimeFormat('en-US', {
						weekday: 'long',
						day: 'numeric',
						month: 'long'
					}).format(new Date(currentStation.lastchangetime))}</span
				>•
				<span id="location">
					{#if currentStation.state}{currentStation.state}, {/if}{currentStation.country}
				</span>
			</div>
		{/if}
		<audio controls={!!currentStation} bind:this={audio} />
	</div>
	<div class="filter">
		<Tags
			addKeys={[13, 32]}
			placeholder="Filter by tags"
			allowBlur={true}
			autoCompleteFilter={false}
			on:tags={handleTags}
			autoComplete={(a) =>
				tagList
					.filter((i) => i.name.toLowerCase().includes(a.toLowerCase()))
					.slice(0, 30)
					.sort((a, b) => a.stationcount - b.stationcount)
					.map((i) => i.name)}
		/>
	</div>
	<ul class="stations" bind:this={stationList}>
		{#if loadingStations}
			<div class="loader">
				<div class="bar" />
			</div>
		{/if}
		{#each stations as station}
			<li
				class="station"
				on:click={() =>
					station?.stationuuid === currentStation?.stationuuid ? audio.pause() : play(station)}
			>
				<a on:click|preventDefault href={station.homepage} alt="Homepage for {station.name}"
					>{station.name}</a
				>
				<SlideButton
					type="button"
					text={station?.stationuuid === currentStation?.stationuuid ? 'Pause' : 'Play'}
					alt={station?.stationuuid === currentStation?.stationuuid ? 'Pause' : 'Play'}
					secondary={station?.stationuuid === currentStation?.stationuuid ? '⏸️' : '▶︎'}
				/>
			</li>
		{:else}
			<span id="noResults">
				{#if loadingStations}
					Loading...
				{:else}
					No results
				{/if}
			</span>
		{/each}
		<div
			use:inview
			class="inview"
			on:enter={() => loadStations()}
			style="display: block; width: 100%; padding: 3px;"
		/>
	</ul>
</div>

<style lang="less">
	:global(.svelte-tags-input-matchs) {
		background: white;
		z-index: 100;
	}
	* {
		box-sizing: border-box;
	}
	#noResults {
		padding: .3rem;
		margin-top: 1rem;
		width: 100%;
		text-align: center;
		font-weight: 200;
		font-style: italic;
		font-size: 1.3rem;
		color: #999;
	}
	.radio_container {
		display: flex;
		flex-direction: column;
	}
	ul {
		position: relative;
		list-style: none;
		margin: 0;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		overflow-x: hidden;
		width: 100%;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
		padding: 0.5rem;
		li {
			padding: 10px;
			width: 100%;
			display: flex;
			justify-content: space-between;
			transition-duration: 200ms;
			transition-property: box-shadow, transform;
			&:active {
				transform: scale(0.98);
			}
			&:hover {
				box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
			}
			align-items: center;
			box-shadow: rgba(0, 0, 0, 0.01) 0px 6px 24px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px;
			cursor: pointer;
			a {
				color: #555;
				&:visited {
					color: #999;
				}
			}
		}
	}
	.header {
		margin-top: 0;
		font-style: italic;
		font-weight: 100;
		font-size: 2rem;
	}
	.current {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 2rem;
		.title {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 200;
			img {
				height: 2.5ch;
				border-radius: 50%;
				margin-right: 0.5rem;
			}
		}
		.info {
			font-style: italic;
			color: #555;
			margin-bottom: 1rem;
			font-weight: 200;
			text-align: center;
			span,
			a {
				margin: 0 4px;
				color: inherit;
			}
		}
	}
	.radio_container {
		padding: 3rem;
		padding-top: 6rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
		max-width: 500px;
		width: 80%;
		ul {
			flex: 1;
		}
	}
	#subtext,
	.header {
		width: 100%;
		text-align: center;
	}
	#subtext {
		font-weight: 200;
		color: #999;
	}
	@keyframes loader-animation {
		0% {
			left: -100%;
		}
		99% {
			left: 100%;
		}
		100% {
			left: -100%;
		}
	}
	.loader {
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		height: 5px;
		width: 100%;
		overflow: hidden;
		.bar {
			width: 100%;
			position: absolute;
			height: 3px;
			background-color: #0004;
			animation-name: loader-animation;
			animation-duration: 1s;
			animation-iteration-count: infinite;
			animation-timing-function: ease-in-out;
		}
	}
</style>
