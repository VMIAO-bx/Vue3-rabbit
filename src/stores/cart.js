import { defineStore } from "pinia";
import { ref, computed } from "vue";

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

    //本地购物车--头部购物车--列表单选框改变，则改变商品selected的属性值
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };

    //定义计算属性 总价钱allCount 商品总数量allCount
    const allCount = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count, 0);
    });
    const allPrice = computed(() => {
      return cartList.value.reduce((a, c) => a + c.count * c.price, 0);
    });

    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected));
    //全选框选中时/未选中时，所有商品的selected的值都要与该框保持一致
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };
    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      addCart,
      delCart,
      singleCheck,
      allCheck,
    };
  },
  {
    //购物车数据持久化，刷新不丢失
    persist: true,
  },
);
