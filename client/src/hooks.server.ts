import type { Handle } from '@sveltejs/kit';
import theme from '$lib/shared/stores/theme';

export const handle = (({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => 
      html.replace('%lang%', 'en')
  });
}) satisfies Handle;