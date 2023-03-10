// Composables
import { createRouter, createWebHistory } from "vue-router";

import AppTemplate from "@/layouts/appTemplate/AppTemplate.vue";
const templateOptions = {
  title: "My application",
  author: "Maxime Moreillon",
  login_url: "https://api.users.maximemoreillon.com/v2/auth/login",
  identification_url: "https://api.users.maximemoreillon.com/v2/users/self",
};
// const routes = [
//   {
//     path: "/",
//     // component: () => import('@/layouts/default/Default.vue'),
//     component: AppTemplate,
//     props: { options: templateOptions },
//     children: [
//       {
//         path: "",
//         name: "Home",
//         component: () =>
//           import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
//       },
//     ],
//   },
// ];

const routes = [
  {
    path: "",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
