/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./source/*.{html, js}"],
	theme: {
		extend: {
			fontFamily: {
				main: "'Ubuntu', sans-serif",
			},
			colors: {
				"text": "#fefefe",
				"bg": "#121212"
			}
		},
	},
	plugins: [],
};
