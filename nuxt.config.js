export default {
  target: 'static',

  head: {
    title: 'Lucas Hockley',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/css/main.css', 'aos/dist/aos.css'],

  components: true,

  loading: false,

  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  modules: ['@nuxtjs/axios', 'nuxt-webfontloader'],

  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],

  webfontloader: {
    google: {
      families: ['Rubik:300,400,500,600,700,800', 'Material Icons Round'],
    },
  },

  colorMode: {
    classSuffix: '',
  },
};
