// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	telemetry: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
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
});
