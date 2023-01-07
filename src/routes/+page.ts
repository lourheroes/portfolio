/** @type {import('./$types').PageLoad} */
/**
 * export function load({ route }) {
    console.log("HELLO");
    console.log(route.id); // '/a/[b]/[...c]'
}
 */

import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		title: 'Home'
	};
}) satisfies PageLoad;
