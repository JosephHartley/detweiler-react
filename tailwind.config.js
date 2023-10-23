/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueGray': '#555C6D',
        'detweilerPink': '#E09EA4',
        'detweilerGreen': '#a4e09e',
      },
    },
  },
  plugins: [],
}
