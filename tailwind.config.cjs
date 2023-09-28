/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'extrabold': ['Chakra Petch', 'sans-serif'],
        'bold': ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
