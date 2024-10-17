/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: '400px',
      sm: '200px',
      md: '568px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

