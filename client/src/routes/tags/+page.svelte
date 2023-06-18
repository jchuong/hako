<script>
	import TagsList from '$lib/shared/components/TagsList.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Tags - Hako</title>
</svelte:head>
<h2>Tags</h2>
<TagsList tags={[{ id: 1, name: 'Test' }]} />
