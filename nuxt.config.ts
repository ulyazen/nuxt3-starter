// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@vue-macros/nuxt',
    'nuxt-headlessui',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
  ],
  css: ['~/assets/css/index.css'],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  postcss: {
    plugins: {
      'postcss-hexrgba': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      'postcss-lighten-darken': {},
      autoprefixer: {},
    },
  },
  pinia: { autoImports: ['defineStore', 'storeToRefs'] },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict: false,
        strictNullChecks: true,
      },
    },
  },
  image: {
    dir: 'assets/images',
    format: ['webp'],
  },
})
