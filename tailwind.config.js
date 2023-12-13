/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      general: ['Inter', 'monospace']
    }
  },
  plugins: [],
}

