export default {
  buildModules: ["@nuxtjs/dotenv"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  publicRuntimeConfig: {
    api_key: process.env.NUXT_API_KEY,
    auth_domain: process.env.NUXT_AUTH_DOMAIN,
    project_id: process.env.NUXT_PROJECT_ID,
    storage_bucket: process.env.NUXT_STORAGE_BUCKET,
    messaging_sender_id: process.env.NUXT_MESSAGING_SENDER_ID,
    app_id: process.env.NUXT_APP_ID,
    measurement_id: process.env.NUXT_MEASUREMENT_ID
  },
  telemetry: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    // '@nuxt/http',
  ],
  head: {
    title: "O LAB LAC | Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "24x24",
        index: 0,
        href: "/programmeur.png",
      },
    ],
  },
  site: {
    url: "https://olablac.com",
  },
  "nuxt-simple-sitemap": {
    path: "/sitemap.xml",
    hostname: "https://olablac.com",
    defaults: {
      changefreq: "daily",
      priority: 1,
    },
    routes: async () => {
      return [
        "/",
        "/about",
        "/portfolio",
        // ...
      ];
    },
  },
  googleFonts: {
    families: {
      Play: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 500],
        ital: [100],
      },
    },
  },
};
