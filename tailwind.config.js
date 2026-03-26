/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#009e9e',
          600: '#008f8f',
          700: '#007a7a',
          800: '#006565',
          900: '#004d4d',
        },
        accent: {
          50: '#e8faf5',
          100: '#d1f5eb',
          200: '#a3ebd7',
          300: '#75e1c3',
          400: '#47d7af',
          500: '#19cd9b',
          600: '#14a47c',
          700: '#0f7b5d',
          800: '#0a523e',
          900: '#05291f',
        },
        medical: {
          teal: '#00897b',
          dark: '#1a2332',
          gray: '#f8f9fa',
          text: '#4a5568',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
