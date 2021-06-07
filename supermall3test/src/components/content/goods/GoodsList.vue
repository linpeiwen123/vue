<template>
  <div class="goods">
<!--    <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-list-item>-->
    <goods-list-item v-for="(item, id) in goods" :goods-item="item" :key="id"/>
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
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
