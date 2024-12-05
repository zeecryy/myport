/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f97316',
        dark: '#0f172a',
      },
      fontFamily: {
        inter: 'Inter Tight',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
