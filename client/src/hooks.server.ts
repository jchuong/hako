import type { Handle } from '@sveltejs/kit';

export const handle = (({ event, resolve }) => {
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', 'en')
	});
}) satisfies Handle;
