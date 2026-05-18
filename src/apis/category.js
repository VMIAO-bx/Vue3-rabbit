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
