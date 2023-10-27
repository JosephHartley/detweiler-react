/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'payeOrange': '#D6632C',
        'payeRed': '#D7585F',
        'payeYellow': '#E5B446',
        'payeBlue': '#A2C9D7',
        'payePurple': '#8D8CBD',
      },
    },
  },
  plugins: [],
}
