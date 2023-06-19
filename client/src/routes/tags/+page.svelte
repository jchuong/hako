<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tags - Hako</title>
</svelte:head>
<h2>Tags</h2>
{#if data.error}
	<p>{data.error}</p>
{:else}
	<ul>
		{#each data.tags as tag (tag.id)}
			<li>{tag.name}</li>
		{/each}
	</ul>
{/if}
