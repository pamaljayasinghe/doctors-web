/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './data/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Derived from the clinic logo (green + blue cross)
        brand: {
          green: {
            50: '#effaf1',
            100: '#d7f2dc',
            200: '#b1e5bd',
            300: '#7ed195',
            400: '#4bbb70',
            500: '#2ea355', // primary green
            600: '#228344',
            700: '#1d6839',
            800: '#1a5330',
            900: '#17442a',
          },
          blue: {
            50: '#eff7ff',
            100: '#daedff',
            200: '#bde0ff',
            300: '#8fcbff',
            400: '#5aadff',
            500: '#2f8cff',
            600: '#1a6de0', // primary blue
            700: '#1757b4',
            800: '#184a90',
            900: '#183f74',
          },
          navy: '#0b1f3a',
          ink: '#0d1b2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px -10px rgba(13, 27, 42, 0.18)',
        soft: '0 10px 40px -20px rgba(13, 27, 42, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, rgba(46,163,85,0.08) 0%, rgba(26,109,224,0.10) 100%)',
        'cta-gradient':
          'linear-gradient(120deg, #1a6de0 0%, #184a90 55%, #0b1f3a 100%)',
      },
    },
  },
  plugins: [],
};
