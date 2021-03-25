import Vue from 'vue'
import App from './App'
import router from './router'
import "./components/font/iconfont.css"
import store from "./store";

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
