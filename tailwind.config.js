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
      'secundary': '#451659',
      'terminal': '#292734',
      'gray': {
        '300': '#d1d5db',
        '400': '#9ca3af'
      },
      'pink': {
        '400': '#F472B6',
        '500': '#EC4899'
      },
      'red': {
        '400': '#F87171',
        '500': '#EF4444'
      },
      'orange': {
        '400': '#FB923C'
      },
      'yellow': {
        '500': '#EAB308'
      }
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
};
