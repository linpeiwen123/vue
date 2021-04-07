<template>
  <div>
    <!--头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <div>{{banner}}</div>
    </nav-bar>
    <!--轮播图-->
    <home-swiper class="swiper" :banner="banner"/>
    <!--轮播下面小图详情-->
    <recommend-view :recommend="recommend"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"/>
    <goods-list :goods="goods['pop'].list"/>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getHomeMultidata, getHomeGoods} from "../../natwork/home"
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        dKeyword: [],
        keywords: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.data.banner.list
          this.dKeyword = res.data.data.dKeyword.list
          this.keywords = res.data.data.keywords.list
          this.recommend = res.data.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .swiper {
    margin-top: 44px;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
