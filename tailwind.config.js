/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {},
      colors: {
        primaryOne: {
          100: '#6278F7',
        },
        primaryTwo: {
          100: '#F2F2F2'
        },
        white: {
          100: '#FFFFFF'
        },
        lightblue: {
          100: '#95FFD4'
        }
      },
  },
  plugins: [],
}
