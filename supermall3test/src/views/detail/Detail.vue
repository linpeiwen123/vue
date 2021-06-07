<template>
  <div class="detail">
    <nav-bar class="home-nav" ref="nav">
      <img slot="left" src="../../assets/img/common/back.svg" @click="backHome"/>
      <div slot="center" class="navBarCen">
        <div v-for="(item,index) in navTitle" :key="index" :class="{active: index === itemIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
    <scroll class="content" ref="betscroll" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="pullingUp" >
      <detail-swiper :topimg="topImage"/>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"  ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommendInfo" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopFlag"></back-top>
    <detail-bot-bar @addCart="addCart"></detail-bot-bar>
  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";
  import GoodsList from "../../components/content/goods/GoodsList";

  import NavBar from "../../components/common/navbar/NavBar";
  import {getDetailGoods,itemGoods,Shop,Param,getRecommend} from "../../natwork/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import DetailBotBar from "./childComps/DetailBotBar";
  import {itemListenerMixin,backTopMixin} from "../../common/mixin";
  // import { Toast } from 'vant';

  export default {
    name: "Detail",
    data() {
      return {
        iid:null,
        navTitle:["商品","参数","评论","推荐"],
        itemIndex:0,
        topImage:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:[],
        recommendInfo:[],
        themeTopY: [],
        currentIndex: 0,
      }
    },
    components:{
      // Toast,
      NavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      GoodsList,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBotBar
    },
    created() {
      // this.iid = this.$route.params.iid
      this.iid = this.$route.query.iid;
      this.getDetailGoods()
      //请求推荐数据
      getRecommend().then(res => {
        this.recommendInfo = res.data.data.list
      })
    },
    mixins:[itemListenerMixin,backTopMixin],
    methods: {
      backHome(){
        this.$router.push("/home")
      },
      itemClick(index){
        this.itemIndex = index
        this.$refs.betscroll.scroll.scrollTo(0, -this.themeTopY[index], 200)
      },
      getDetailGoods() {
        getDetailGoods(this.$route.query.iid).then(res => {
          let data = res.data.result;

          this.topImage = data.itemInfo.topImages
          this.goods = new itemGoods(data.itemInfo,data.columns,data.shopInfo.services);
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule)
          //判断是否有评论
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list
          }
        })
      },
      goodsImgLoad() {
        this.$refs.betscroll.refresh();
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.param.$el.offsetTop);
        this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(Number.MAX_VALUE);
      },
      //滚动切换菜单
      contentScroll(position){
        //返回顶部是否显示
        this.backTopFlag = (-position.y) > 500;
        const positionY = -(position.y);
        let _lenth = this.themeTopY.length;
        for(let i=0; i<_lenth-1; i++){
          if(this.itemIndex !== i && (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i+1])){
            this.itemIndex = i;
            this.$refs.nav.itemIndex = this.itemIndex;
          }
        }
      },
      pullingUp(){

      },
      //加入购物车
      addCart() {
        // 获取购物车需要展示的信息
        const product = {}
        product.image = this.topImage[0];
        product.title = this.goods.title;
        product.desc = this.goods.discountDesc;
        product.price = this.goods.lowNowPrice;
        product.iid = this.iid;

        //将商品添加到购物车里
        // this.$store.commit('addCart', product).then(res=>{
        //
        // });
        this.$store.dispatch("addCart", product).then(res => {
          // 提示用户
          /*Toast({
            message: res,
            duration: 800
          });*/
          this.$toast.show(res,1000)
        })


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
