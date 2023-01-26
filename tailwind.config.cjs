/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'folio-purple': '#7D6E83',
				'folio-dark-cream': '#D0B8A8',
				'folio-cream': '#DFD3C3',
				'folio-light-cream': '#F8EDE3',
				'folio-yellow': '#f1dc92',
				'folio-black': '#222222',
				'folio-orange': '#FE490C',
				'folio-white': '#fff'
			}
		}
	},
	plugins: []
};
