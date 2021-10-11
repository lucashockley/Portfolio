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

  css: ['@assets/css/main.css', 'aos/dist/aos.css'],

  components: true,

  buildModules: ['@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', 'nuxt-webfontloader'],

  plugins: [{ src: '~/plugins/aos.js', mode: 'client' }],

  purgeCSS: {
    whitelist: [
      'aos-init',
      'aos-animate',
      'data-aos-delay',
      'data-aos-duration',
      'fade-up',
      'fade-in',
    ],
  },

  webfontloader: {
    google: {
      families: ['Rubik:300,400,500,600,700,800'],
    },
  },
};
