import httpInstance from "@/utils/http";
//获取轮播图API
export function getBannerAPI(params = {}) {
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}
//新鲜好物API
export function findNewAPI() {
  return httpInstance({
    url: "/home/new",
  });
}
//人气推荐API
export function getHotAPI() {
  return httpInstance({
    url: "/home/hot",
  });
}
//精品推荐API
export function getGoodsAPI() {
  return httpInstance({
    url: "/home/goods",
  });
}
