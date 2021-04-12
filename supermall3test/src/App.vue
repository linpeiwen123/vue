<template>
  <div id="app">
    <!-- keep-alive 使组件始终处于活跃状态，再次回到该组件不会重新加载 -->
    <!-- exclude排除被缓存的组件 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/maintabbar/MainTabBar";

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
</style>
