import httpInstance from "@/utils/http";

export function getDetailAPI(id) {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
}

//热榜数据请求
export function fetchHotGoodsAPI({ id, type, limit = 3 }) {
  return httpInstance({
    url: "/goods/hot",
    params: {
      id,
      type,
      limit,
    },
  });
}
