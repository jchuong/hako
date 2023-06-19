<script lang="ts">
	import type { components } from '$lib/shared/api/types.d.ts';
	// TODO: Just remove this..
	export let tags: Array<components['schemas']['TagOut']>;
</script>

<ul>
	{#each tags as tag (tag.id)}
		<li>{tag.name}</li>
	{/each}
</ul>
