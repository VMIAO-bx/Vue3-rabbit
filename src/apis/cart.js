import httpInstance from "@/utils/http";

//封装加入购物车接口
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

//获取最新的购物车列表
export const findNewCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

//删除商品接口
export const delCartAPI = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};
