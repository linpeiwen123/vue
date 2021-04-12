<template>
  <div id="home">
    <!--头部 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
      <div>{{banner}}</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control-top" @itemClick="itemClick" ref="tabControl1"
                 v-show="isTabFixed"/>
    <scroll class="content" ref="betscroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="pullingUp">
      <!--轮播图-->
      <home-swiper class="swiper" :banner="banner" @swiperImageLoad="swiperImageLoad"/>
      <!--轮播下面小图详情-->
      <recommend-view :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @itemClick="itemClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="backTopFlag"></back-top>
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
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";
  import {debounce} from "../../common/utils";

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
        },
        currentType: "pop",//定义变量list值
        backTopFlag: false,
        tabControlTop: 0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        //选择['流行','新款','精选']事件监听
        return this.goods[this.currentType].list
      }
    },
    // 组件切换时候执行的方法，与keep-alive结合使用
    deactivated() {
      //获取此时y轴的位置
      // this.saveY = this.$refs.betscroll.scroll.y
      this.saveY = this.$refs.betscroll.getScrollY()
    },
    // 组件切换进来时的状态
    activated() {
      this.$refs.betscroll.scroll.refresh()
      this.$refs.betscroll.scroll.scrollTo(0, this.saveY, 1)
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    created() {
      this.getHomeMultidata();
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },

    mounted() {
      const refresh = debounce(this.$refs.betscroll.refresh, 200)
      this.$bus.$on('imgLoad', () => {
        //再去加载一下srcollHeight的高度
        // this.$refs.betscroll.refresh()
        //执行防抖函数
        refresh()
      })
    },
    methods: {
      swiperImageLoad() {
        // console.log(this.$refs.tabControl2.$el.offsetTop)
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop + 35

      },
      pullingUp() {
        this.getHomeGoods(this.currentType);
      },
      //滚动顶部隐藏显示事件
      contentScroll(position) {
        setTimeout(() => {
          this.backTopFlag = (-position.y) > 1000
          // console.log(this.tabControlTop)
          this.isTabFixed = (-position.y) > this.tabControlTop
          // console.log(this.isTabFixed)
        }, 100)

      },
      //滚动顶部事件
      backClick() {
        //防止出现better-scroll未加载就调用refresh()的bug,暂时未出现
        // this.$refs.betscroll.scroll && this.$refs.betscroll.scroll.scrollTo && this.$refs.betscroll.scroll.scrollTo(0, 0,1000)
        this.$refs.betscroll.scroll.scrollTo(0, 0, 1000)
      },
      itemClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.itemIndex = index
        this.$refs.tabControl2.itemIndex = index
      },
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
          this.$refs.betscroll.scroll.finishPullUp()
        })
      },

    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    position: relative;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 999999;
    /*position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;*/
  }

  .swiper {
    margin-top: 44px;
  }

  .tab-control-top {
    /*position: sticky;*/
    position: relative;
    top: -1px;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
    /*height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;*/
  }

  .tabFixed {
    position: fixed;
    left: 0px;
    top: 44px;
    right: 0px;
    /*transform: translate();*/
  }
</style>
