export default defineNuxtConfig({
  quasar: {
    // Configurable Component Defaults
    components: {
      defaults: {
        QBtn: {
          dense: true,
          flat: true,
        },
        QInput: {
          dense: true
        }
      }
    }
  },

  modules: ["nuxt-quasar-ui"]
})