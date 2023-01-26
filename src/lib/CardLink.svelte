<script lang="ts">
	export let href = 'javascript:void(0);';
	export let title = '';
	export let imgSrc = '';
	import smartwatch from '$lib/assets/smartwatch-green.png';
	//export let className = 'text-folio-white hover:text-folio-orange text-3xl font-bold';
	//hover:border-gray-700 hover:bg-gray-800
	//hover:border-folio-orange hover:bg-folio-orange
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="border-1 flex items-center rounded-xl border-solid p-4 transition duration-300 hover:border-gray-800 hover:bg-gray-900"
>
	<img
		alt="TODO CardLink Logo"
		src={imgSrc}
		width="56"
		height="56"
		class="w-16 pr-3"
		loading="lazy"
	/>
	<div>
		<h4 class="text-xl font-bold">{title}</h4>
		<div class="text-base text-gray-300">
			<slot />
		</div>
	</div>
</a>
