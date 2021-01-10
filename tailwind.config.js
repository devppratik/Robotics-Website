module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins']
      },

      inset: {

        'val': 'calc(100% - 4px)'
      },
    },
  },
    variants: {
      extend: { 
        
        inset: ['hover', 'focus'],
      },
    },
    plugins: [],

}
