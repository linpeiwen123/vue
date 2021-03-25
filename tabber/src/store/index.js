import Vue from 'vue'
import Vuex from 'Vuex'
/*import {
  INCERMENT,
  DECREMENT,
  ADDCONT,
  USERPUSH
} from "./mutations-type"*/

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})

export default store
