const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.trueGray,
        green: colors.green,
      },
      height: {
        over: '120%',
      },
      inset: {
        '-3/20': '-15%',
        '-1/10': '-10%',
      },
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  purge: {
    safelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-in',
      'fade-up',
      'vsc-initialized',
    ],
  },
};
