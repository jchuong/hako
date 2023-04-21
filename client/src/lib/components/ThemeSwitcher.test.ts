import { render, screen } from '@testing-library/svelte';

import ThemeSwitcher from './ThemeSwitcher.svelte';

it('renders a switch', () => {
	render(ThemeSwitcher);
	expect(screen.getByRole('switch', { name: 'Dark mode' })).toBeInTheDocument();
});
