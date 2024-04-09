/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dark-blue': '#0d0f16',
      'grey-blue': '#12141C',
      gold: '#d0bb79',
      black: 'rgb(0 0 0)'
    },
    extend: {
      textColor: {
        secondary: '#999'
      }
    }
  },
  plugins: []
}
