module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1324',
      },
      boxShadow: {
        '3xl': '0px 0px 17px 10px #3065FF',
        '4xl': '0 4px 40px rgb(0 0 0/ 10%)',
        '5xl': '0 4px 40px rgb(0 0 0/10%)',
        '6xl': '0px 0px 10px 1px #000',
      },
      backgroundImage: {
        subscribe: "url('/images/subscribe.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
