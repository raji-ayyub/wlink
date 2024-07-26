/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultp: "#633CFF",
        activep: "#BEADFF",
        disabledp: "#EFEBFF",
        error: "#FF3939",
        white: "#FFF",

        black: "#333333",
        smoked: "#737373",
        gray: "#FAFAFA",
        borders: "#D9D9D9"
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 4px 8px 0 rgba(105, 65, 198, 0.4)',
      },
      width: {
        'bw-sm': '150px',
        'bw-md': '98%',


        'mob': '285px',
        'mob-l': '307px',


        'wsm': '300px',
        'wmd': '300px',

        'ww' : '500px',
        'wx' : '58%',

        'wxx' : '95%',


        'cl' : '96px',

      },

      height: {
        'bh-sm': '44px',
        'bh-md': '48px',
        'bh-lg': '60px',

        'lh' : '600px',
        'lhh' : '20rem',
        'ch' : '96px',

      },

      
      

    },
  },
  plugins: [],
}
