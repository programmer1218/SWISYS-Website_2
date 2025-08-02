/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Screenshot 2025-08-01 121405.png')", // make sure this file is inside /public
      },
    },
  },
  plugins: [],
};
