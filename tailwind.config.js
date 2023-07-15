const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '28rem',
        120: '30rem',
      },
      colors: {
        'cib-black': '#151722',
        'cib-white': '#F5F9FF',
        'cib-blue': '#0068FF',
        'cib-green': '#00E669',
        'cib-grey-light': '#95AAC9',
        'cib-grey-medium': '#475A76',
        'cib-grey-dark': '#253449',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
