<template>
  <div class="wrapper" ref="betscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Scroll",
    props: {
      probeType: Number,
      default() {
        return 0
      },
      pullUpLoad: Boolean,
      default() {
        return false
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.betscroll, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
        observeDOM: true,
        taps: true
      })
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position)
      })

      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp")
      })
    },
    methods: {
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style scoped>

</style>
