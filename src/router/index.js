import { createRouter, createWebHistory } from "vue-router";
import routes from './templateRoutes'



const router = createRouter({
    history: createWebHistory(),
    routes,
})



export default router