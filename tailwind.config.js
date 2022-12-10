/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./flask_app/templates/**/*.{html,js}", "./flask_app/static/js/*.js"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg:'1024px',
      xl:'1280px'
    },
    extend: {
      colors: {
        lightBlue: '#CCD9E2',
        blue: '#285185',
        orange: '#D67940',
        brown: '#6F4849',
      },
    },
    safelist: ['scrolled', 'hidden'],
  },
  plugins: [],
}
