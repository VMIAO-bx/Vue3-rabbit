import httpInstance from "@/utils/http";

export function getDetailAPI(id) {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
}
