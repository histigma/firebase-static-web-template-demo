/**
 * plugins/index.js
 *
 * Included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from './pinia'
import vueuseHead from './vueuse-head'


export function registerPlugins (app) {
  app.use(vuetify)
  app.use(pinia) 
  app.use(vueuseHead)
  // app.config.globalProperties.$axios = axios
}
