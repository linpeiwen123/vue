<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="">
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
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
