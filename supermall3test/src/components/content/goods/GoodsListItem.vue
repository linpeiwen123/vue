<template>
  <div class="goods-item" @click="goodsItemFun">
    <img :src="goodsItem.show.img" @load="imgLoad"/>
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
    },
    //load图片加载完执行的方法
    methods:{
      imgLoad(){
        // 使用$bus.$emit将方法发射到home
        this.$bus.$emit("imgLoad")
      },
      goodsItemFun(){
        // this.$router.push("/detail/"+this.goodsItem.iid)
        this.$router.push({
          path:"/detail",
          query:{
            iid:this.goodsItem.iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
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
