/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#27AE60',
        'secondary': '#F39C12',
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'heading': ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};