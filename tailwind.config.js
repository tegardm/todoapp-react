/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        primary : '#0090C1',
        secondary : '#38aecc',
        thirdy : '#183446',
        fourty : '#bfd7ea',
        'custom-base-red': '#ff2f23',
        'custom-light-red': '#fb4a40',
        'custom-white': '#fefcfb',
        'custom-dark-gray': '#5f5f6c',
        'custom-light-gray': '#f7f7f7',
        'custom-border-gray': '#eeeeee',
        'custom-footer-bg': '#1d2124',
      },
      fontFamily : {
        'poppins' : ['Poppins']
      }
    },
  },
  plugins: [],
}
