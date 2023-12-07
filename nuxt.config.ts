// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false      
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Archiwum Zabytków Kościoła Rektoralnego w Lublinie",
      htmlAttrs: {
        lang: 'pl'
      }
    }
  }

})
