import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "TooBar",
    component: () => import("../views/ToolBar.vue"),
    children: [
      {
        path: "/ProductById",
        name: "ProductById",
        title: "ProductById",
        icon: "mdi-calculator-variant",
        component: () => import("../views/ProductById.vue"),
      }, {
        path: "/register",
        name: "register",
        title: "Register",
        icon: "mdi-calculator-variant",
        component: () => import("../views/RegisterView.vue"),
      },
      {
        path: "/store",
        name: "store",
        title: "Store",
        icon: "mdi-calculator-variant",
        component: () => import("../views/StoreView.vue"),
      },
      {
        path: "/apicon",
        name: "apicon",
        title: "apicon",
        icon: "mdi-calculator-variant",
        component: () => import("../views/APIcon.vue"),
      },
      {
        path: "/product",
        name: "product",
        title: "product",
        icon: "mdi-calculator-variant",
        component: () => import("../views/Product.vue"),
      },{
        path: "/calculate_grade",
        name: "calculate_grade",
        title: "Calculate Grade",
        icon: "mdi-calculator-variant",
        component: () => import("../views/CalculateGrade.vue"),
      },
      {
        path: "/simpla",
        name: "simpla",
        title: "Simpla",
        icon: "mdi-home",
        component: () => import("../views/Simpla.vue"),
      },
      {
        path: "/home",
        name: "home",
        title: "Home",
        icon: "mdi-home",
        component: () => import("../views/HomeView.vue"),
      },
      {
        path: "/about",
        name: "about",
        title: "About Me",
        icon: "mdi-account",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        title: "Dashboard",
        icon: "mdi-view-dashboard",
        component: () => import("../views/DashboardView.vue"),
      },
      {
        path: "/me",
        name: "me",
        title: "Me",
        icon: "mdi-account-box",
        component: () => import("../views/MeView.vue"),
      },
      {
        path: "/",
        name: "login",
        title: "Login",
        icon: "mdi-login",
        component: () => import("../views/LoginView.vue"),
      }
    ],
  },
  {
    path: "/ProductAdmin",
    name: "ProductAdmin",
    title: "ProductAdmin",
    icon: "mdi-calculator-variant",
    component: () => import("../views/ProductAdminView.vue"),
  },{
    path: "/OrdersAdmin",
    name: "OrdersAdmin",
    title: "OrdersAdmin",
    icon: "mdi-calculator-variant",
    component: () => import("../views/OrdersAdminView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
