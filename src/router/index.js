import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/mainPage.vue";
import pageComponentsVue from "@/components/mainPage/pageComponents.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: MainPage,
      children: [{ path: "/", name: "pageComponentsVue", component: pageComponentsVue }],
    },
  ],
});

export default router;
