/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height:{
        xxl: '92%',
        xsl: '8%'
      },
      colors:{
        info: '#EAD196'
      }
    },
  },
  plugins: [],
}

