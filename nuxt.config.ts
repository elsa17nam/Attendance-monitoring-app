// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })
// nuxt.config.js
export default defineNuxtConfig({
  css: ['@/assets/css/tailwind.css'],

  // pages: true, // This is true by default, so no need to set explicitly
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-07-20'
});