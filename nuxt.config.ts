// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_APP_BASE_URL || "http://localhost:3000", // Fallback URL
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/ui"],

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },

  compatibilityDate: "2025-02-16",
});
