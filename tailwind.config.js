/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height:{
        xxl: '92%',
        xxs: '8%'
      },
      colors:{
        info: '#EAD196',
        line: '#E52525',
        background : '#FFADAD'

      }
    },
  },
  plugins: [],
}

