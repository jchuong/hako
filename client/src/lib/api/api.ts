import { Apity } from '@cocreators-ee/apity';
import type { paths } from '$lib/api/types';

const apity = Apity.for<paths>();

// global configuration
apity.configure({
	// Base URL to your API
	baseUrl: 'http://localhost:8000',
	// RequestInit options, e.g. default headers
	init: {
		mode: 'same-origin'
	}
});

// create fetch operations
export const getTags = apity.path('/api/tags').method('get').create();
