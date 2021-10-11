const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.trueGray,
        green: colors.green,
        smc: {
          400: '#ff3870',
          500: '#fa054c',
        }
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
};
