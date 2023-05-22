/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens:{
    sm: '480px',
      md: '768px',
      lg: '976px',
      xl:'1440px'
  },
  theme: {
    extend: {
      colors:{
       darkPurple : '#560052',
       lightPurple : '#9A1C94',
       ash:'#555555',
       lightAsh:"#ffffff",
        ashGrad: 'rgba(69, 69, 69, 0.4)',
      }
    },
  },
  plugins: [],
}

