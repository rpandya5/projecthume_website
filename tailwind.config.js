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
        'custom-pink': '#F296B9',
        'custom-green': '#83D1CD',
        'custom-red': '#AD4244',
        'custom-blue': '#65B6DD',
        'custom-purple': '#A1B8F8',
        'custom-orange': '#F27B18',
        'custom-yellow': '#FFCB5F',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
