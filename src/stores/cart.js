import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    //1.定义state
    const cartList = ref([]);
    //2.定义获取cartList的方法
    const addCart = (goods) => {
      //1.如果先前添加过该商品，则在此基础上加count
      const item = cartList.value.find((item) => goods.skuId === item.skuId);
      if (item) {
        //找到了
        item.count += goods.count;
      } else {
        //2.若没有添加过，则push进cartList
        cartList.value.push(goods);
      }
    };

    //点击删除商品的方法
    const delCart = (skuId) => {
      //使用filter过滤实现删除效果
      cartList.value = cartList.value.filter((item) => item.skuId !== skuId);
    };
    return {
      cartList,
      addCart,
      delCart,
    };
  },
  {
    //购物车数据持久化，刷新不丢失
    persist: true,
  },
);
