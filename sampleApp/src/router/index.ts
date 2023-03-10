// Composables
import { createRouter, createWebHistory } from "vue-router";

import AppTemplate from "@moreillon/vuetify3-application-template";
import "@moreillon/vuetify3-application-template/dist/style.css";
const templateOptions = {
  title: "My application",
  author: "Maxime Moreillon",
  login_url: "https://api.users.maximemoreillon.com/v2/auth/login",
  identification_url: "https://api.users.maximemoreillon.com/v2/users/self",
};
const routes = [
  {
    path: "/",
    component: AppTemplate,
    props: { options: templateOptions },

    children: [
      {
        path: "",
        name: "Home",

        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

// const routes = [
//   {
//     path: "",
//     name: "Home",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
