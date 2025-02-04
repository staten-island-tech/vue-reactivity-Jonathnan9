/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/main.js', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    themes: ['dim', 'emerald'],
    extend: {},
  },
  plugins: [require('daisyui')],
}
