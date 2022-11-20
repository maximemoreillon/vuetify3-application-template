import { createRouter, createWebHistory } from "vue-router";
import routes from './appRoutes'



const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router