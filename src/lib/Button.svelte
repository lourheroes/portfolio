<script lang="ts">
	export let type = 'default';
</script>

<button
	type="button"
	class="bg-folio-light-brown hover:bg-folio-brown rounded border border-solid border-folio-white p-1 px-3 text-folio-white hover:border-folio-orange"
	class:hover:text-folio-orange={type == 'default'}
	class:hover:text-folio-white={type == 'primary'}
	class:hover:bg-folio-orange={type == 'primary'}
>
	<slot />
</button>
