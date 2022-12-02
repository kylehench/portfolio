/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./flask_app/templates/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        lightBlue: '#CCD9E2',
        blue: '#285185',
        orange: '#D67940',
        brown: '#6F4849',
      },
    },
  },
  plugins: [],
}
