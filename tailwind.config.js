/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bg': 'linear-gradient(#000, #67267E 220%)',
        'gradient-button': 'linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%)'
      },
      fontFamily: {
        "quicksand": ['Quicksand', "sans-serif"],
        "dmMono": ['DM Mono', "monospace"],
      }
    },
  },
  plugins: [],
}
