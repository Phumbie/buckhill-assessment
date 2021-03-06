import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/Home.vue";
import cookies from "vue-cookies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "default",
      requiresAuth: false,
    },
  },
  {
    path: "/customers",
    name: "Customers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/Admin/Customer"),
    meta: {
      layout: "admin",
      requiresAuth: true,
    },
  },
  {
    path: "*",
    redirect: "/",
    name: "Not Found",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = cookies.get("token");
    if (token) {
      next();
      return;
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
