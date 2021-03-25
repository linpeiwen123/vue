<template>
  <div>
    <h2>我的</h2>
    <div><h2>{{$store.state.counter}}</h2></div>
    <div>{{$store.getters.powerCounter}}</div>
    <div>{{$store.getters.powerCounterLength}}</div>
    <div>{{$store.getters.powerCounterFilterAge(20)}}</div>

    <div>{{$store.state.info}}</div>

    <button @click="fiveFun(5)">+5</button>
    <button @click="tenFun(10)" >+10</button>
    <button @click="userPushFun" >添加</button>
    <button @click="infoSet" >修改</button>
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
      methods:{
        fiveFun(count){
          this.$store.commit(ADDCONT,count)
        },
        tenFun(count){
          this.$store.commit(ADDCONT,count)
          // let aaa  =  {id:"116",name:"jack",age:35}
          // this.$store.commit("userPush",aaa)
        },
        userPushFun(){
          let use  =  {id:"116",name:"jack",age:35}
          this.$store.commit(USERPUSH,use)
        },
        infoSet(){
          //异步调用，必须调用actions里面的函数
          this.$store.dispatch("asynInfo")
        }
      }
    }
</script>

<style scoped>

</style>
