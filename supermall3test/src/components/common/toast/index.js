import Toast from "./Toast";

const obj = {}
//安装后默认走toast文件下的index.js文件，并且会第一个走obj的install
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器，可以创建出一个组件对象
  const toast = new toastConstructor()

  // 3.将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  // 5.创建事件总线
  Vue.prototype.$toast = toast
}

export default obj
