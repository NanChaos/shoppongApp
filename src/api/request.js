/*对axios进行封装*/
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css"

const requests = axios.create({
    // 配置对象
    // 基础url
    baseURL: "/api",
    // 超时时间 5s
    timeout: 5000,
})
// 请求拦截器，可以在请求发出去之前，做一些事
requests.interceptors.request.use((config) => {
    // 饱含着一个请求头header
    nprogress.start();
    return config;
})
// 相应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    nprogress.done();
    return res.data;
}, error => {
    // 相应失败的回调函数
    return Promise.reject(new Error("FAILURE"))
})

/*对外暴露*/
export default requests;