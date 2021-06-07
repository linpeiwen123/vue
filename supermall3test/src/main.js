import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./components/common/toast"
import "./components/common/font/iconfont.css"
import FastClick from "fastclick"
import LazyLoad from "vue-lazyload"

//解决移动端移动端300毫秒点击延迟
FastClick.attach(document.body)
Vue.use(toast)
Vue.use(LazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
//利用Vue.prototype定义一个$bus的全局变量
Vue.prototype.$bus = new Vue()

// 3. 引入全局UI组件库-vant
import { Toast } from 'vant';
Vue.use(Toast);
import { SwipeCell } from 'vant';

Vue.use(SwipeCell);
import { Dialog  } from 'vant';

Vue.use(Dialog);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
