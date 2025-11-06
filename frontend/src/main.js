// import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { registerPlugins } from './plugins'

import './assets/styles/styles.css'
import { ViteSSG } from 'vite-ssg'


export const createApp = ViteSSG(
  App,
  { routes: router.options.routes },
  async ({ app, router }) => {
    app.use(router);
    registerPlugins(app);
  },
);

// const app = createApp(App)
// app.use(router)
// registerPlugins(app)
// app.mount('#app')
