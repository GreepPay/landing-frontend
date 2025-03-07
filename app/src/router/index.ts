import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/TermsView.vue"),
    },
    {
      path: "/:notFound",
      component: import("../views/NotFound.vue"),
    },
    // {
    //   path: "/privacy",
    //   name: "privacy",
    //   component: () => import("../views/PrivacyView.vue"),
    // },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
