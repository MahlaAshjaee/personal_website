import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/App.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerHeight;

        return window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      return { top: 0 };
    }
  },
});

export default router;
