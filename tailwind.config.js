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
