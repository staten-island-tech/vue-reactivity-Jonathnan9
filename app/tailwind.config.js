/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/main.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dim', 'emerald'], // Define themes here for daisyUI
  },
}
