/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    screens: {
      'xs': '412px',
      '2xs': {'max': '412px'},
      ...defaultTheme.screens,
    },
    extend: {
      backgroundColor:{
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      minWidth: {
        '1/2': '50%',
        '512': '512px',
        '256': '256px'
      },
      keyframes:{
        
      },
      colors:{
        'normal':'#faa',
        'normalHover':'#ff4382',
        'inverse': '#ff0055',
        'inverseHover':'rgb(185 28 28)',
        'danger':'#db2222',
        'dangerHover':'#f34343',
        'disabled':{
          'light':'#ddd',
          DEFAULT:'#ccc',
          'dark':'#979797'
        },
      }
    },
  },
  plugins: [],
}