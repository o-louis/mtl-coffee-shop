// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', 'nuxt3-leaflet'],

  app: {
    head: {
      title: 'Cafés Montréal',
      meta: [
        { name: 'description', content: 'Découvrez les meilleurs cafés de Montréal par catégorie' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
