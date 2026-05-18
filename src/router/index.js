import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/layout-index.vue";
import Login from "@/views/Login/login-index.vue";
import Home from "@/views/Home/home-index.vue";
import Category from "@/views/Category/category-index.vue";
import SubCategory from "@/views/SubCategory/subCategory-index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "category/:id",
          component: Category,
        },
        {
          path: "category/sub/:id",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  //路由行为配置
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
