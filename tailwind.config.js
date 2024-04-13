/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '568px',
      'md': '768px',
      'lg': '900px',
      // 'xl': '1280px',
      // '2xl': '1536px',
    },
    container: {
      padding: '1rem',
    },
    extend: {
      colors: {
        slate: { // primary
          900: '#000400',
        },
        gray: { // second
          100: '#EFECE7',
          400: '#9B9893'
        },
        blue: { 
          200: '#E2EDFA',
          500: '#03438D'
        },
        yellow: {
          400: '#EEC32A'
        },
        red: {
          400: '#F57375'
        }
      }
    },
  },
  plugins: [],
}

