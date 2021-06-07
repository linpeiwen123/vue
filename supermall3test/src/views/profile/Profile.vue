<template>
  <div>
    <h2>我的</h2>
    <button @click="addtoken">登录</button>
    <button @click="removeStore">推出登录</button>
    <button @click="getToken">查看token信息</button>

  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: "Profile",
    computed:{
      ...mapState(["userInfo"])
    },
    mounted() {
      console.log(this.userInfo)
    },
    methods:{
      ...mapMutations(["removeStoreInfo"]),
      addtoken(){
        let obj = {
          icon_url: "http://www.itlike.com/uploads/picture/20190814/80b52b5d5b25db373c0aee56e7df4e80.png",
          phone: "17878761220",
          real_name: "小撩宝宝",
          token: "5ff8230612509749664c3fb6"
        };
        // this.$store.commit("setStoreInfo",obj)
        this.$store.dispatch("syncUserInfo",obj).then(res => {
          console.log("登录成功")
        })
      },
      removeStore(){
        this.removeStoreInfo()
      },
      getToken(){
        console.log(this.userInfo);
      }
    }
  }
</script>

<style scoped>

</style>
