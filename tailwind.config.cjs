const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],

	theme: {
		fontFamily: {
			sans: ['Work Sans'],
			poppins: ['Poppins'],
		},
		extend: {
			colors: {
				primary: colors.emerald
			},
		},
	},

	plugins: []
};

module.exports = config;
