/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // packages does not transpile by default
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['"Open Sans"'],
    },
    extend: {
      colors: {
        primary: '#cf1430',
        'theme-dark': '#0e1414',
      },
    },
  },
  plugins: [],
};
