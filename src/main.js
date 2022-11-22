
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)


app
    .use(router)
    .mount('#app')
