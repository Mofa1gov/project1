module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      height: {
        '10vh': "10vh",
        '20vh': "20vh",
        '30vh': "30vh",
        '40vh': "40vh",
        '50vh': "50vh",
        '60vh': "60vh",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '100vh': "100vh",
      },
      colors: {
        first : '#FB842A',
        second: '#F7F7F7',
        a: '#F37A0F',
        b: ''
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
