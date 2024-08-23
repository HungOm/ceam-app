/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cea-blue': '#0000FF', // Replace with the exact color code from your logo
        'cea-blue-light': '#3333FF',
        'cea-blue-dark': '#0000CC',
      }
    },
  },
  plugins: [],
}