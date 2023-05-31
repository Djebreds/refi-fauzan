module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        'cv-dark': '#303642',
        'cv-dark-gray': '#3D3D3D',
        'cv-light-gray': '#737373',
        'cv-blue-primary': '#38B6FF',
        'cv-blue-primary-dark': '#1b8dcf',
      },
      screens: {
        '2x1': '1320px',
      },
    },
  },
  variants: {},
  plugins: [require('flowbite/plugin')],
  content: [
    './node_modules/flowbite/**/*.js',
    './index.html',
  ],
};
