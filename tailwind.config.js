/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily : {
      'yekan-bakh' : ['YekanBakh', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': "#F2F2FF",
        'custom-white' : "#F9F9F9",
      }
    },
  },
  plugins: [],
}

