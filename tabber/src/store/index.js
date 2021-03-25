import Vue from 'vue'
import Vuex from 'Vuex'
/*import {
  INCERMENT,
  DECREMENT,
  ADDCONT,
  USERPUSH
} from "./mutations-type"*/
import * as types from "./mutations-type"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 1000,
    users:[
      {id:"111",name:"zhangsan",age:14},
      {id:"112",name:"lisi",age:20},
      {id:"113",name:"wangwu",age:25},
      {id:"114",name:"zhaoliu",age:30}
    ],
    info:{
      id:"111",
      name:"lisi",
      age:18
    }

  },
  mutations: {
    [types.INCERMENT](state) {
      state.counter++
    },
    [types.DECREMENT](state) {
      state.counter--
    },
    [types.ADDCONT](state,count) {
      state.counter += count
    },
    [types.USERPUSH](state,use){
      state.users.push(use)
      Vue.set(state.info,name,"zhangsan")

    },
    [types.SETINFO](state){
      state.info.name = "zhangsan"
      /*setTimeout(()=>{
        state.info.name = "zhangsan"
      },2000)*/

    }

  },
  actions:{
    asynInfo(context){
      //异步调用
      setTimeout(()=>{
        /**
         * 异步后必须调用mutations里面的方法，不可以绕过mutations，
         * 不然不会被Devtools监听到，容易引发数据混乱
         */
        context.commit(types.SETINFO)
      },1000)
    }
  },
  getters:{
    powerCounter(state){
      return state.users.filter(s => s.age >= 20)
    },
    powerCounterLength(state,getters){
      return getters.powerCounter.length;
    },
    powerCounterFilterAge(state){
      // return function (age) {
      //   return state.users.filter(s => s.age > age)
      // }
      //上面ES6简化方式
      return age => {
        return  state.users.filter(s => s.age > age)
      }
    },
    userOperating(){

    }
  },
  modules:{

  }
})

export default store
