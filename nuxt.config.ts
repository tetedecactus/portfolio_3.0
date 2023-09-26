export default {
  telemetry: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    // '@nuxt/http',
  ],
  site: {
    url: 'https://olablac.com',
  },
  // http: {
    // baseURL: 'https://olablac.com',
  // },
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
