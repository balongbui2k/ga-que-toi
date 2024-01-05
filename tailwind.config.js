/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main-orange":"#EE7214"
      },

      brightness: {
        30: '0.3',
      },

      screens: {
      'mobile': { 'max': '640px'},
      'tablet': {'min': '641px', 'max': '767px'},
      'surface': {'min': '768px', 'max': '1024px'},
      'laptop': {'min': '1025px', 'max': '1279px'},
      'desktop': {'min': '1280px', 'max': '1535px'},
      'lg-desktop': {'min': '1536px'},
    },
    },

  },
  plugins: [],
}

