<template>
  <div class="cart">
    <nav-bar class="home-nav">
      <div slot="center">购物车({{num}})</div>
    </nav-bar>
    <cart-list/>
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./childCopm/CartList";
  import CartBotBar from "./childCopm/CartBotBar";
  export default {
    name: "Cart",
    data() {
      return {

      }
    },
    computed:{
      num(){
        return this.$store.state.cartList.length
      }
    },
    components:{
      NavBar,
      CartList,
      CartBotBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
