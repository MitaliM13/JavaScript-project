/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'header': '#881337',
      'nav-text': '#F5F5F5',
      'background' : '#F1F5F9',
      'active-link': '#FF8C8C',
      'hover-link': '#FF5C5C',
      'button-bg': '#FF5C5C',
      'button-text': '#FFFFFF',
      'card-bg': '#FFFFFF',
      'card-border': '#E0E0E0',
      'card-shadow': 'rgba(0, 0, 0, 0.1)',
      'div-bg-primary': '#F8F8F8',
      'div-bg-secondary': '#FFFFFF',
      'slogan-text': '#881337',
      'highlight-text': '#FF8C8C',
      'heading-primary': '#881337',
      'heading-secondary': '#FF5C5C',
      'money': '#588157',
      'shopping-bag': '#f4a261',
      'icon': '#264653'
    },
  },
  plugins: [],
}

