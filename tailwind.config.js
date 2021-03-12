/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.APP_ENV !== 'local',
    layers: ['utilities'],
    content: [
      'src/components/**/*.vue',
      'src/helpers/**/*.ts',
      'src/layouts/**/*.vue',
      'src/middleware/**/*.ts',
      'src/models/**/*.ts',
      'src/pages/**/*.vue',
      'src/plugins/**/*.ts',
      'src/services/**/*.ts',
      'nuxt.config.js',
    ],
    options: {
      safelist: [/svg.*/, /-green-.*/],
    },
  },
};
