
import App from './App.vue'
import router from './router'
import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

// Allowing pinia to use the router
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

app
    .use(pinia)
    .use(router)
    .mount('#app')
