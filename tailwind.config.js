/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
        body: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
