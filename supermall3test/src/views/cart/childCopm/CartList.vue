<template>
  <div class="cart-list">
    <cart-list-item :cartList="cartList"></cart-list-item>
  </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  export default {
    name: "CartList",
    computed:{
      cartList(){
        return this.$store.state.cartList
      }
    },
    components:{
      CartListItem
    }
  }
</script>

<style scoped>
  .cart-list {
    position: relative;
    /*top: 44px;*/
    /*bottom: 89px;*/
    background-color: #fff;
  }
</style>
