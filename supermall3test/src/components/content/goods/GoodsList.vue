<template>
  <div>
    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    props: {
      goods: Array,
      default() {
        return []
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>

</style>
