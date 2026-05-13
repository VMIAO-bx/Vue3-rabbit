import httpInstance from "@/utils/http";

export function getCateGory() {
  return httpInstance({
    url: "home/category/head",
  });
}
