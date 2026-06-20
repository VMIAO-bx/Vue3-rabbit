import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/views/Layout/layout-index.vue";
import Login from "@/views/Login/login-index.vue";
import Home from "@/views/Home/home-index.vue";
import Category from "@/views/Category/category-index.vue";
import SubCategory from "@/views/SubCategory/subCategory-index.vue";
import Detail from "@/views/Detail/detail-index.vue";
import CartList from "@/views/CartList/cartlist-index.vue";
import Checkout from "@/views/Checkout/checkout-index.vue";
import Pay from "@/views/Pay/pay-index.vue";
import Member from "@/views/Member/member-index.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          component: Checkout,
        },
        {
          path: "pay",
          component: Pay,
        },
        {
          path: "member",
          component: Member,
          children: [
            {
              path: "",
              component: UserInfo,
            },
            {
              path: "order",
              component: UserOrder,
            },
          ],
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
