<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Header from '$lib/Header.svelte';
	import type { LinkType } from '$models/types/link.type';

	const items: LinkType[] = [
		{
			name: 'About',
			url: '/'
		},
		{
			name: 'Experience',
			url: '/projects'
		},
		{
			name: 'Projects',
			url: '/projects'
		}
	];
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<Header {items} />

<main>
	<slot />
</main>
