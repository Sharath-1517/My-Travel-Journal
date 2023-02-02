/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ['Inter', 'sans-serif']
      },

      fontSize: {
        'country-font-size' : ['2.6rem']
      },

      colors: {
        'country-dark' : ['#2B283A'],
        'link-color' : ['#918E9B'],
      },

      backgroundColor: {
        'nav-color' : ['#F55A5A']
      },
      width: {
        'nav-width' : ['99.5%'],
        'img-width' : ['250px'],
        'para-width' : ['475px'],
      },

      letterSpacing: {
        wide: '.18em',
      },

      height: {
        'img-height' : ['340px'],
      },

      margin: {
        'nav-top-margin' : ['2px'],
        'margin-top-date' : ['3rem'],
        'margin-bot-date' : ['1rem'],
      },

      lineHeight: {
        'para-height' : ['150%']
      },
    },
  },
  plugins: [],
}