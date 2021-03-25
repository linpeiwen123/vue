import * as types from "./mutations-type";
import Vue from "vue";

export default {
  [types.INCERMENT](state) {
    state.counter++
  },
  [types.DECREMENT](state) {
    state.counter--
  },
  [types.ADDCONT](state, count) {
    state.counter += count
  },
  [types.USERPUSH](state, use) {
    state.users.push(use)
    Vue.set(state.info, name, "zhangsan")

  },
  [types.SETINFO](state) {
    state.info.name = "zhangsan"
    /*setTimeout(()=>{
      state.info.name = "zhangsan"
    },2000)*/

  }

}
