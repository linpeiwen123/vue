import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./components/common/font/iconfont.css"

Vue.config.productionTip = false
//利用Vue.prototype定义一个$bus的全局变量
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
