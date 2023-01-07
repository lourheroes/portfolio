import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'About'
	};
}) satisfies PageLoad;
