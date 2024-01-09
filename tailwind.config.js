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
        20: '0.2'
      },

    },

  },
  plugins: [],
}

