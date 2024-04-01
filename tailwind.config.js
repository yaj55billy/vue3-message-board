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
        Slate: {
          900: '#000400',
        },
      }
    },
  },
  plugins: [],
}

