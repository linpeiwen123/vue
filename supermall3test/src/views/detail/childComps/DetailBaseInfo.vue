<template>
  <div v-if="Object.keys(goods).length !== 0" class="detail-base-info">
    <div class="title-top">
      <div class="title">{{goods.title}}</div>
      <span class="price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount-desc" :style="{background:goods.discountBgColor}">{{goods.discountDesc}}</span>
    </div>
    <div class="freight-detail columns">
      <span>{{goods.columns[0]}}</span>
      <span class="columns-center">{{goods.columns[1]}}</span>
      <span class="columns-right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="freight-detail services">
      <span v-for="index in goods.services.length - 1" :key="index"
            :class="index == 2 ? 'columns-center': (index == 3 ? 'columns-right':'')"
            >
        <img class="icon-img" :src="goods.services[index - 1].icon"/>
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: Object,
      default() {
        return {}
      }
    }
  }
</script>

<style scoped>
  .detail-base-info{
    padding: 10px;
    border-bottom: 5px solid #f2f2f2;
  }
  .title-top{
    padding-bottom: 20px;
  }
  .title{
    font-size: 20px;
    padding-bottom: 10px;
  }
  .price{
    color: var(--color-tint);
    font-size: 24px;
    padding-right: 6px;
  }
  .old-price{
    text-decoration:line-through;
    font-size: 12px;
    color: #999;
    padding-right: 6px;
  }
  .discount-desc{
    line-height: 15px;
    border-radius: 9px;
    color: #fff;
    font-size: 13px;
    padding: 4px;
  }
  .freight-detail{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: white;
  }
  .freight-detail span{
    flex: 1;
  }
  .columns{
    padding-bottom: 13px;
    font-size: 12px;
    color: #999;
    border-bottom: 1px solid #e8e8e8;
  }
  .columns-center{
    text-align: center;
  }
  .columns-right{
    text-align: right;
  }
  .services{
    padding-top: 18px;
    font-size: 13px;
    color: #333;
    padding-bottom: 10px;
  }
  .icon-img{
    width: 15px;
  }
</style>
