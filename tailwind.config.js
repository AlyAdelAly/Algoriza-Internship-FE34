/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#F2F2F2',
        'light-blue': '#2F80ED',
        'orange-light': '#FCEFCA',
        'light-gray': '#EBEBEB',
        'gray': '#4F4F4F',
        'dark-gray': '333',
        'light-black': '#181818'
      },
      fontSize: {
        'sm': '13px',
      },
      borderRadius: {
        'md': '4px',
      }
    },
    container: {
      padding: '100px',
    },
  },
  plugins: [],
}