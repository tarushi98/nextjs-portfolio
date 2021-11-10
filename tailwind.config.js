
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      fontFamily:{
        'edgy':['Oswald','sans-serif']
      },
      container:{
        center:true,
        padding:'20rem',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
