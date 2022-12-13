module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(17, 24, 39)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
