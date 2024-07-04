/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      screens: {
        'll': '1366px',
      }
    },
  },
  plugins: [],
}

