const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        success: '#42c236',
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
  darkMode: 'class',
};
