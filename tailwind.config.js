/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'subtext': ['Cooper BT', 'sans-serif'],
        'primary': ['The Seasons', 'serif'],
      },
      colors: {
        background: '#1E1F22',
        subtext: '#D5FCFD',
        primary: '#65B6DD',
      },
    },
  },
  plugins: [],
};
