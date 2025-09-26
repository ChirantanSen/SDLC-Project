/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',   // default language
    locales: ['en', 'es', ], // add as many as you want
  },
  localePath: path.resolve('./public/locales'), // where your translation files live
};
