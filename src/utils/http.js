//axios基础的封装
import axios from "axios";
//导入el的弹出框以及样式，这里用来在用户登录失败/成功情况下弹出提示框
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";

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
    return config;
  },
  (e) => Promise.reject(e),
);

//axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    return Promise.reject(e);
  },
);
//暴露/导出
export default httpInstance;
