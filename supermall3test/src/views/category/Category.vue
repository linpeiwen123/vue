<template>
  <div class="wrapper" ref="aaaa">
    <div>
      <h2>分类</h2>
      <ul class="content">
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
        <li>分类的子项</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.aaaa, {
        probeType:3,
        pullUpLoad:true
      })

      this.scroll.on("scroll",(position) =>{
        //滚动条位置
        // console.log(position)
      })

      this.scroll.on('pullingUp',()=>{
        console.log("上拉刷新");
      })
    }
  }
</script>

<style scoped>
  .wrapper {
    width: 100%;
    background: bisque;
    overflow: hidden;
    height: 250px;
  }
</style>
