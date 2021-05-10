<template>
  <div class="detail">
    <nav-bar class="home-nav">
      <img slot="left" src="../../assets/img/common/back.svg" @click="backHome"/>
      <div slot="center" class="navBarCen">
        <div v-for="(item,index) in navTitle" :key="index" :class="{active: index === itemIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
    <scroll class="content" ref="betscroll" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="pullingUp">
      <detail-swiper :topimg="topImage"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getDetailGoods,itemGoods,Shop} from "../../natwork/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";

  export default {
    name: "Detail",
    data() {
      return {
        navTitle:["商品","参数","评论","推荐"],
        itemIndex:0,
        topImage:[],
        goods:{},
        shop:{},
        detailInfo:{}
      }
    },
    components:{
      NavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo
    },
    created() {
      this.getDetailGoods()
    },
    methods: {
      backHome(){
        this.$router.push("/home")
      },
      itemClick(index){
        this.itemIndex = index
      },
      getDetailGoods() {
        getDetailGoods(this.$route.query.iid).then(res => {
          let data = res.data.result;

          this.topImage = data.itemInfo.topImages
          this.goods = new itemGoods(data.itemInfo,data.columns,data.shopInfo.services);
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          console.log(this.detailInfo)
        })
      },
      contentScroll(){

      },
      pullingUp(){

      }
    }
  }
</script>

<style scoped>
  .detail{
    height: 100vh;
  }
  .navBarCen{
    display: flex;
    font-size: 14px;
  }

  .navBarCen div{
    flex: 1;
  }
  .content {
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 49px;*/
    /*left: 0px;*/
    /*right: 0px;*/
    height: calc(100% - 93px);
    overflow: hidden;
  }
  .active {
    color: var(--color-tint);
  }
</style>
