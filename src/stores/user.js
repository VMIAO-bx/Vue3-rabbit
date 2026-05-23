//管理用户数据相关
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    //1.定义管理用户数据的state
    const userInfo = ref({});
    //2.定义获取数据接口的action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      //合并购物车操作
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        }),
        //更新购物车列表
        cartStore.updateList(),
      );
    };

    //清除用户数据
    const clearUserInfo = () => {
      userInfo.value = {};
      //再清空购物车列表
      cartStore.clearCartList();
    };
    //3.以对象的格式把useInfo和getUserInfo以对象的格式 return出去
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    //使用pinia实现持久化，从而实现刷新时仍保持登录状态
    persist: true,
  },
);
