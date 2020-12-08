import { createRouter, createWebHistory } from "vue-router";
import Home from "../../components/front/Home.vue"
import Test from "../../components/front/Test.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/test", component: Test },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, _, next) => {
//   if (to.meta.middleware) {
//     const middleware = require(`./middleware/${to.meta.middleware}`);
//     if (middleware) {
//       middleware.default(next, store);
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
