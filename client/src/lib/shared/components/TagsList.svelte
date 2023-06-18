<script lang="ts">
	// TODO: Get types
	export let tags: { name: string, id: number }[];
</script>

<ul>
	{#each tags as tag (tag.id)}
		<li>{tag.name}</li>
	{/each}
</ul>
