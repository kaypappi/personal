// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    colorMode: {
        classSuffix: "",
    },
    css: ["@/assets/css/styles.css"],
    
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/color-mode', 'nuxt-icon','@vueuse/motion/nuxt'],
    motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            },
          }
        }
    },
})
