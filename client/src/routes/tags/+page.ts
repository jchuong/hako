import { getTags } from '$lib/api/api';


export async function load({ fetch }) {
    const request = getTags({}, fetch);
    const response = await request.result;

    if (!response.ok) {
        return {
            tags: [],
            error: 'Failed to load tags',
        };
    }
    return {
        tags: response.data,
        error: undefined,
    };
}