import Vue from 'vue'
import App from './App'
import router from './router'
import "./components/font/iconfont.css"
import store from "./store";

Vue.config.productionTip = false

import axios from "axios";

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/*axios({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res => {
  console.log(res)
})
*/
//设置默认的端口前缀
/*
axios.defaults.baseURL = "http://123.207.32.32:8000"
//设置默认超时时间aaa
axios.defaults.timeout = 5000
axios({
  url: "/home/data",
  params: {
    type: "pop",
    page: 1
  }
}).then(res => {
  console.log(res)
})

axios.all([axios({
  url: "http://123.207.32.32:8000/home/multidata"
})], [axios({
  url: "http://123.207.32.32:8000/home/data",
  params: {
    type: "pop",
    page: 1
  }
})])
  //   .then(result => {
  //   console.log(result)
  // })

  // 或者直接拿到两个结果
  .then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
  }))

//创建对应的axios实例
const instance = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 5000
})

instance({
  url: "/home/multidata",
  params: {
    type: "pop",
    page: 1
  }
}).then(result => {
  console.log(result)
})
*/


import {request} from "./natwork/request";

request({
  url: "/home/multidata"
}).then(message => {
  console.log(message)
}).catch(err => {
  console.log(err)
})
