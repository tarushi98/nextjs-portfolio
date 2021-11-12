const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily:{
        'edgy':['Oswald','sans-serif']
      },
      container:{
        center:true,
        padding: {
          DEFAULT:'1rem',
          sm:'20rem',
        },
      colors:{
        lime:colors.lime,
      }

      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
