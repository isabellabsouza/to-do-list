// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
  ],
  build: {
    transpile: ['bootstrap'],
  },
  app: {
    head: {
      title: 'Super Task',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
    },
  }
})
