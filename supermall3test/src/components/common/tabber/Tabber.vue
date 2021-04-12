<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "Tabber"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999;
    bottom:-1px;
    background: #f6f6f6;
    box-shadow: 0px -2px 10px rgb(226 221 221);
  }




</style>
