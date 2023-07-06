/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ag-banner': "url('../asset/AgBanner.png')",
      },
      screens:{
        'sm':'300px',
        'md':'768px',
        'lg':'1080px',
      }
    },
  },
  plugins: [],
}