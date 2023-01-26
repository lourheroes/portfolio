<script>
	import Button from '$lib/Button.svelte';
	import Card from '$lib/Card.svelte';
	import CardLink from '$lib/CardLink.svelte';

	import smartwatch from '$lib/assets/smartwatch-green.png';
	import portfolio from '$lib/assets/portfolio.png';
	//grid-cols-[repeat(auto-fit,_minmax(240px,_1fr)]
	//repeat(auto-fit, minmax(300px, 1fr))
	//grid-cols-3
	//repeat(auto-fit, minmax(300px, 1fr))
</script>

<section class="">
	<h2 class="text-2xl">Open Source</h2>

	<div class="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
		<CardLink title="Portfolio" href="/" imgSrc={portfolio}>
			<p>The portfolio you are on right now</p>
			<p>
				Built using / with <b>Svelte</b>, <b>SvelteKit</b>, <b>TypeScript</b> and <b>tailwindcss</b>
			</p>
		</CardLink>

		<CardLink title="Pebblify" href="https://github.com/lourheroes/pebblify" imgSrc={smartwatch}>
			<p>
				<b>Pebblify</b> is a Spotify app for Pebble smartwatches built with <b>JavaScript</b> and
				<b>Pebble.js</b>
			</p>
			<p>Used by 50 users by month on average</p>
		</CardLink>

		<CardLink title="Pebblify" href="https://github.com/lourheroes/pebblify" imgSrc={smartwatch}>
			<p>
				<b>Pebblify</b> is a Spotify app for Pebble smartwatches built with <b>JavaScript</b> and
				<b>Pebble.js</b>
			</p>
			<p>Used by 50 users by month on average</p>
		</CardLink>

		<CardLink title="Pebblify" href="https://github.com/lourheroes/pebblify" imgSrc={smartwatch}>
			<p>
				<b>Pebblify</b> is a Spotify app for Pebble smartwatches built with <b>JavaScript</b> and
				<b>Pebble.js</b>
			</p>
			<p>Used by 50 users by month on average</p>
		</CardLink>

		<CardLink title="Pebblify" href="https://github.com/lourheroes/pebblify" imgSrc={smartwatch}>
			<p>
				<b>Pebblify</b> is a Spotify app for Pebble smartwatches built with <b>JavaScript</b> and
				<b>Pebble.js</b>
			</p>
			<p>Used by 50 users by month on average</p>
		</CardLink>

		<CardLink title="Another project" imgSrc={portfolio}>
			<p>Pebbify is a Pebble app written in javascript</p>
		</CardLink>

		<CardLink title="Another project" imgSrc={portfolio}>
			<p>Another project with an image and a link</p>
		</CardLink>
	</div>
</section>

<!-- <img alt="The project logo" src={smartwatch} width="48" height="48" class="w-12 pr-3" /> -->
