<script lang="ts">
	import '@picocss/pico';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
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
				<ThemeSwitcher />
			</li>
		</ul>
	</nav>
</header>
<main class="container-fluid">
	<slot />
</main>
