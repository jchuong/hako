<script lang="ts">
	import '@picocss/pico';
	import { version } from '$app/environment';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<div class="layout">
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
	<main class="container-fluid main">
		<slot />
	</main>
	<footer class="container-fluid"><small>{version}</small></footer>
</div>

<style>
	.layout {
		min-height: 100dvh;
		position: relative;
		overflow: auto;
	}
	footer {
		position: absolute;
		bottom: 0;
		display: flex;
		justify-content: center;
	}
</style>
