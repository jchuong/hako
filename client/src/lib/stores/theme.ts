import { browser } from '$app/environment';
import type { Theme } from '$lib/types/Theme';
import { writable } from 'svelte/store';

const defaultValue: Theme = browser
	? window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
	: 'light';
const initialValue: Theme = browser
	? (window.localStorage.getItem('theme') as Theme) ?? defaultValue
	: defaultValue;

const theme = writable<Theme>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});

export default theme;
