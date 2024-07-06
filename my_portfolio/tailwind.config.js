/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '100% 50%',
      },
      translate: {
        '85p': '85%',
        '60p': '60%',
      },
    },
  },
  plugins: [],
}