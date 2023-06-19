<script lang="ts">
	import type { PageData } from './$types';
	import TagsList from '$lib/shared/components/TagsList.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Tags - Hako</title>
</svelte:head>
<h2>Tags</h2>
{#if data.error}
	<p>{data.error}</p>
{:else}
	<TagsList tags={data.tags} />
{/if}
