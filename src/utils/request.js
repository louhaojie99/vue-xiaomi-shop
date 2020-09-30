import axios from "axios";
import { getToken } from "./auth";
import { Toast } from "vant";

// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url
  timeout: 5000,
});

// 请求拦截器
// 全局请求拦截 所有的网络请求发起之前都会先走这个方法
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做些什么
    config.headers.authorization = `Bearer ${getToken()}`;
    // if (getToken()) {
    //   // 如果有的话存入请求头
    //   // config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
// 全局响应拦截 所有的网络请求返回的时候都会先走这个方法
service.interceptors.response.use(
  function(response) {
    // console.log("请求完成了");
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function(error) {
    // 当服务器返回401状态码的时候 跳转到登录页
    if (error && error.response && error.response.status === 401) {
      Toast.fail("登录信息失效，请重新登录");
      // console.log("登录信息失效，请重新登录");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
//service.interceptors.response.use(
//(response) => {
// const res = response.data;
// if (res.code != 200) {
//   return Promise.reject(new Error(res.message || "Error"));
// } else {
//   return res;
// }
//}
// (error) => {
//   console.log("err" + error); // for debug
//   return Promise.reject(error);
// }
//);

// get请求
export function get(url, params) {
  return instance.get(url, {
    params, // params: params 表示url中传递的参数
  });
}

// post请求
export function post(url, data) {
  return instance.post(url, data);
}

export function del(url) {
  return instance.delete(url);
}

export function fileUpload(url, params, data) {
  return instance.post(url, params, data);
}

export default service;
