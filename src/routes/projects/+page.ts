import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Projects'
	};
}) satisfies PageLoad;
