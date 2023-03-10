
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from './plugins'

const app = createApp(App)

registerPlugins(app)


app
    .use(router)
    .use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)  // provide 'axios'
    .mount('#app')
