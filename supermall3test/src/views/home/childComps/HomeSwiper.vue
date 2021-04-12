<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "../../../components/common/swiper"

  export default {
    name: "HomeSwiper",
    props: {
      banner: Array,
      default() {
        return []
      }
    },
    data() {
      return {
        isShow:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad() {
        if(!this.isShow){
          this.$emit("swiperImageLoad")
          this.isShow = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
