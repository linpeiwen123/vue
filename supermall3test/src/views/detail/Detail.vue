<template>
  <div>
    <nav-bar class="home-nav">
      <img slot="left" src="../../assets/img/common/back.svg" @click="backHome"/>
      <div slot="center" class="navBarCen">
        <div v-for="(item,index) in navTitle" :key="index" :class="{active: index === itemIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
    <detail-swiper :topimg="topImage"/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {getDetailGoods} from "../../natwork/home";
  import DetailSwiper from "./childComps/DetailSwiper";

  export default {
    name: "Detail",
    data() {
      return {
        navTitle:["商品","参数","评论","推荐"],
        itemIndex:0,
        topImage:[]
      }
    },
    components:{
      NavBar,
      DetailSwiper
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
          console.log(res)
          this.topImage = res.data.result.itemInfo.topImages
        })
      }
    }
  }
</script>

<style scoped>
  .navBarCen{
    display: flex;
    font-size: 14px;
  }

  .navBarCen div{
    flex: 1;
  }

  .active {
    color: var(--color-tint);
  }
</style>
