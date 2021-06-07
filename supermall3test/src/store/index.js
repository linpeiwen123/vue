import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {setStore,getStore,removeStore} from "../common/global"

export default new Vuex.Store({
  //基本数据，类似data
  state: {
    //定义购物车数据
    cartList: [

    ],
    userInfo:{}
  },
  //修改数据，操作数据，类似methods，同步
  mutations: {
    //mutations唯一的目的就是修改state中的状态
    //mutations中每个方法尽可能的完成的事件比较单一
    addCounter(state,payload){
      payload.count ++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    },
    delCarList(state,id){
      state.cartList = state.cartList.filter((item) => {
        return item.iid != id
      });
    },

    //添加
    setStoreInfo(state,{userInfo}){
      state.userInfo = userInfo;
      setStore('userInfo', state.userInfo);
    },
    getStoreInfo(state){
      // 8.1 获取用户信息
      let userInfo = getStore('userInfo');
      // 8.2 判断
      if (userInfo) {
        state.userInfo = JSON.parse(userInfo);
      }
    },
    removeStoreInfo(state){
      state.userInfo = {};
      removeStore('userInfo');
    }
  },
  //修饰mutations，异步
  actions: {
    //官方给予的vuex结构是，任何修改state的过程必须经过actions(异步，可以使用Promise操作数据) -->  mutations(同步，只需修改state)
    addCart(context, payload) {
      return new Promise((resolve,reject)=>{
        //数组find()方法
        let oldProduct = context.state.cartList.find(function (item) {
          return item.iid === payload.iid
        })
        // ES6写法
        /*let oldProduct = state.cartList.find(item => {
          return item.iid === payload.iid
        })*/
        if (oldProduct) {
          // oldProduct.count += 1;
          context.commit("addCounter",oldProduct)
          resolve("当前商品数量+1")
        } else {
          payload.count = 1;
          payload.checked = true;
          // context.state.cartList.push(payload)
          context.commit("addToCart",payload)
          resolve("添加到购物车成功")
        }
      })
    },
    syncUserInfo({commit}, userInfo) {
      commit("setStoreInfo", {userInfo})
    },
  },
  //用的少
  modules: {}
})
