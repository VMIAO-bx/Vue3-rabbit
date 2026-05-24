//这里写所有有关用户的接口

import httpInstance from "@/utils/http";
//这里采用对象的结构赋值形式传参，方便在调用时知道要传什么数据
export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};

//封装 会员中心--个人中心--猜你喜欢
export const getLikesListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
