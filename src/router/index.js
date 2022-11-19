import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// TODO: add authentication guards

export default router