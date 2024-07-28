
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