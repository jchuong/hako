<script lang="ts">
	import '@picocss/pico';

	let isDarkMode = false;
    function handleTheme() {
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.getElementById('root')?.setAttribute('data-theme', newTheme);
    };
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
