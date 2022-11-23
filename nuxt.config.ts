// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    colorMode: {
        classSuffix: "",
    },
    css: ["@/assets/css/styles.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    modules: ['@nuxtjs/color-mode', 'nuxt-icon'],
    buildModules:[],
    
})
