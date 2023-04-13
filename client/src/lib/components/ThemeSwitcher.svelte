<script lang="ts">
	import { browser } from '$app/environment';
	import theme from '$lib/stores/theme';
	import type { Theme } from '$lib/types/Theme';

	let isDarkMode = false;
	theme.subscribe((t) => {
		isDarkMode = t === 'dark';
	});
	function handleTheme() {
		const newTheme: Theme = isDarkMode ? 'light' : 'dark';
		theme.set(newTheme);
		document.getElementById('root')?.setAttribute('data-theme', newTheme);
	}
	if (browser) {
		document.getElementById('root')?.setAttribute('data-theme', $theme);
	}
</script>

<label
	>Dark mode
	<input type="checkbox" role="switch" bind:checked={isDarkMode} on:click={handleTheme} />
</label>
