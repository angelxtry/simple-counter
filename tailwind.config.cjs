module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [require('daisyui'), require('@tailwindcss/line-clamp')],
  daisyui: {
    darkTheme: 'dark',
    themes: ['light', 'pastel'],
  },
};
