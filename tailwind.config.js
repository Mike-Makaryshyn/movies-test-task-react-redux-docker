/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
         yellow: '#DDC64A'
      },
      minWidth: {
         '1/2': '50%',
       }
    },
  },
  plugins: [],
};
