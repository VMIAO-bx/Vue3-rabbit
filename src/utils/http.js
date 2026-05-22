//axios基础的封装
import axios from "axios";
//导入el的弹出框以及样式，这里用来在用户登录失败/成功情况下弹出提示框
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user";
import router from "@/router/index";

//创建axios实例
const httpInstance = axios.create({
  //根域名
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  //超时时间
  timeout: 5000,
});

//axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    //1.首先获取到用户的token
    const userStore = useUserStore();
    const token = userStore.userInfo?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e),
);

//axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const message = e.response?.data?.message || "网络请求失败，请稍后重试";
    ElMessage({
      type: "warning",
      message,
    });
    //401报错时
    //1.清空用户登录数据
    //2.跳转路由到登录界面
    if (e.response?.status === 401) {
      const userStore = useUserStore();
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  },
);
//暴露/导出
export default httpInstance;
