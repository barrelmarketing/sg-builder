export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/sg-builder/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sg-builder',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" },
      { rel: "stylesheet", type: "text/css", href: "https://unpkg.com/aos@next/dist/aos.css" },
      { rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css2?family=Assistant:wght@100;200;500;700&display=swap" },
      { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" },
    ],
    script: [
      // { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' },
      // { src: 'https://unpkg.com/aos@next/dist/aos.js' },
      { src: '/sg-builder/bootstrap.bundle.min.js', }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/style.scss', lang: 'sass' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~plugins/aos.js',
      ssr: false,
    },
    { src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


}

