<script lang="ts">
	import Link from './Link.svelte';
	import type { LinkType } from '$models/types/link.type';

	export let items: LinkType[];
</script>

<header class="flex flex-row gap-4">
	{#if items.length > 0}
		{#each items as { name, url }, i}
			<Link href={url}>{name}</Link>
		{/each}
	{/if}
</header>
