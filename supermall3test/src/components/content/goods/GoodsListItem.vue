<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: Object,
      default() {
        return {}
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    float: left;
    padding-bottom: 40px;
    position: relative;
    margin-left: 1.2%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    height: 290px;
  }

  .goods-item p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
