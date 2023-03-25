/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'elena-justinas': "url('~@/assets/background-picture.jpeg')"
      }
    },
  },
  plugins: [],
}
