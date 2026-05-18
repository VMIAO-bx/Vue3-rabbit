import httpInstance from "@/utils/http";

export function getTopCategoryAPI(id) {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
}

//封装二级分类入口
export function getCategoryFilterAPI(id) {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
}
//获取基础商品列表
export function getSubCategoryAPI(data) {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
}
