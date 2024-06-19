// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  target: 'static',  // Ensure this line is included
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/website/' : '/',
  },
  devtools: { enabled: true },
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify']
  },
  plugins: ['~/plugins/vuetify.js']
})
