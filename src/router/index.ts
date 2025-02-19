import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import LogInPage from "@/views/LogInPage.vue";
import HomePage from "@/views/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/logIn",
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogInPage
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
