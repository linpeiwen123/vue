<template>
  <div>
    <h2>我的</h2>
    <div><h2>{{$store.state.counter}}</h2></div>
    <div>{{$store.getters.powerCounter}}</div>
    <div>{{$store.getters.powerCounterLength}}</div>
    <div>{{$store.getters.powerCounterFilterAge(20)}}</div>

    <div>{{$store.state.info}}</div>

    <button @click="fiveFun(5)">+5</button>
    <button @click="tenFun(10)">+10</button>
    <button @click="userPushFun">添加</button>
    <button @click="infoSet">修改</button>
  </div>
</template>

<script>
  import {
    INCERMENT,
    DECREMENT,
    ADDCONT,
    USERPUSH,
    SETINFO
  } from "../../store/mutations-type"

  export default {
    name: "User",
    methods: {
      fiveFun(count) {
        this.$store.commit(ADDCONT, count)
      },
      tenFun(count) {
        this.$store.commit(ADDCONT, count)
        // let aaa  =  {id:"116",name:"jack",age:35}
        // this.$store.commit("userPush",aaa)
      },
      userPushFun() {
        let use = {id: "116", name: "jack", age: 35}
        this.$store.commit(USERPUSH, use)
      },
      infoSet() {
        // 1、异步调用，必须调用actions里面的函数
        // this.$store.dispatch("asynInfo")

        // 2、携带信息
        // this.$store.dispatch("asynInfo", {
        //   message: "成功了",
        //   success: () => {
        //       console.log("里面的也成功了")
        //   }
        // })

        // 3.Promise调用then返回
        this.$store.dispatch("asynInfo", "我是携带者").then(success => {
          console.log(success)
        })
      }
    }
  }
</script>

<style scoped>

</style>
