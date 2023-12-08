export default {
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  telemetry: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    // '@nuxt/http',
  ],
  head: {
    title: 'O LAB LAC | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [ { rel: 'icon', type: 'image/png', sizes: '24x24', index: 0, href: '/programmeur.png' }, ],
  },
  site: {
    url: 'https://olablac.com',
  },
  'nuxt-simple-sitemap': {
    path: '/sitemap.xml',
    hostname: 'https://olablac.com',
    defaults: {
      changefreq: 'daily',
      priority: 1,
    },
    routes: async () => {
      return [
        '/',
        '/about',
        '/portfolio',
        // ...
      ];
    },
  },
  googleFonts: {
    families: {
      Play: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 500],
        ital: [100]
      },
    }
  }
}
