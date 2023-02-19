/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'extend-midnight': '#292F3F',
        'extend-blue': '#03A9F1',
        'extend-orange': '#F18303',
        'extend-pink': '#B347EA',
        'extend-purple': '#837DFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
