<template>
  <div class="tab-bar-item" @click="routerLinkFun">
    <div :class="{active:isActive}">
      <slot name="table-icno"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="tabber-test"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabberitme",
    props:{
      path:{
        type:String,
        default:"",//默认值
      }
    },
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      routerLinkFun() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 15px;
    line-height: 10px;
  }

  i {
    font-weight: 700;
    font-size: 19px;
    line-height: 31px;
  }
  .active{
    color: red;
  }
</style>
