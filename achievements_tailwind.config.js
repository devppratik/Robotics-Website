module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        poppins: ['Poppins']
      },
      
      boxShadow: {
        '3xl': '2px 2px 6px 2px  rgba(0, 0, 0, 0.8)',
      },

      lineHeight: {
        '1.1': '1.15rem',
       }
    },
  },
    variants: {
      extend: { 
        
        backgroundOpacity: ['dark'],
      },
    },
    plugins: [],

}
