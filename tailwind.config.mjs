/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        colors: {
            'brightsun':'#F9D142',
            'greenwhite':'#E9E9E9',
            'deepaqua':'#007575',
            'balticsea':'#292826',
          },
		extend: {
            fontFamily: {
                'fragment-mono': ['Fragment Mono', 'monospace'],
            }
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
