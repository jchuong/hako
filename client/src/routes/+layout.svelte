<script lang="ts">
	import '@picocss/pico';
    import theme from '$lib/shared/stores/theme';
	import { browser } from '$app/environment';

	let isDarkMode = false;
    theme.subscribe(t => {
        isDarkMode = t === 'dark';
    })
    function handleTheme() {
        const newTheme = isDarkMode ? 'light' : 'dark';
        theme.set(newTheme);
        document.getElementById('root')?.setAttribute('data-theme', newTheme);
    };
	if (browser) {
		document.getElementById('root')?.setAttribute('data-theme', $theme);
	}
</script>

<header class="container-fluid">
	<nav>
		<ul>
			<li>Hako</li>
		</ul>
		<ul>
			<li>Some link</li>
		</ul>
		<ul>
			<li>
				<label
					>Dark mode <input
						type="checkbox"
						role="switch"
						bind:checked={isDarkMode}
						on:click={handleTheme}
					/></label
				>
			</li>
		</ul>
	</nav>
</header>
<main class="container-fluid">
	<slot />
</main>
