/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#1C1C1C',
      'gray-hover': '#2E2E2E',
      'success': '#50D15D',
      'warning': '#F5E06F',
      'error': '#FF5151',
      'primary': '#8C0375',
      'secundary': '#451659'
    },
    extend: {},
  },
  plugins: [],
};
