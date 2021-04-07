import axios from "axios";

export function request(config) {
  // 1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 2、axios请求拦截, 局部拦截器，全局：axios.interceptors
  instance.interceptors.request.use(config => {
    console.log("发送的请求被拦截了")
    //1、比如config中的一些信息不符合服务器的要求
    //2、比如每次发送网络请求时，都希望在界面中显示一个请求转圈的图标
    //3、某些网络请求(比如登录(token))，必须携带的一些特殊的信息

    return config //释放
  },error => {
    console.log("发送的请求有异常")
  })

  // 3、响应拦截
  instance.interceptors.response.use(config => {
    console.log("服务器返回的数据被拦截了")
    return config //释放
  },error => {
    console.log("服务器返回的数据有异常")
  })

  // 4、发送返回的结果，自带Promise效果
  return instance(config)
}
