/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'serif':['"Roboto Condensed"'],
      'serif2':['Arima']
    }
  },
  plugins: [require('tailwindcss-motion')], 
}

