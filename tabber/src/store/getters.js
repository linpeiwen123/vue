export default {
  powerCounter(state) {
    return state.users.filter(s => s.age >= 20)
  },
  powerCounterLength(state, getters) {
    return getters.powerCounter.length;
  },
  powerCounterFilterAge(state) {
    // return function (age) {
    //   return state.users.filter(s => s.age > age)
    // }
    //上面ES6简化方式
    return age => {
      return state.users.filter(s => s.age > age)
    }
  },
  userOperating() {

  }
}
