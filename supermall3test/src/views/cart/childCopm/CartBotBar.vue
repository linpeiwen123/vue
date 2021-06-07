<template>
	<div class="cart-bot-bar flex">
		<div><input type="checkbox" class="check" v-model="flag" id="check" @change="handleChange(flag)">&ensp;<label for="check"> 全部</label> </div>
		<div>合计：{{totalPrice}}</div>
		<div @click="settlement">去结算{{checkLength}}</div>
	</div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
	export default {
		name: 'CartBotBar',
    data(){
		  return{
		    flag:true
      }
    },
		computed: {
			totalPrice() {
				return '￥' + this.$store.state.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue+ item.price * item.count
				},0).toFixed(2)
			},
			checkLength() {
				return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
			},
      ...mapState(["userInfo"])
		},
    mounted() {
      this.$bus.$on('selectEntire', (flag) => {
        this.flag = flag
      })
    },
    methods:{
      handleChange(flag){
        this.$bus.$emit("itemCheck",flag)
      },
      settlement(){
        if(this.userInfo.token){ // 已经登录
          this.$toast.show("已登录",1000)
        }else {
          this.$toast.show("未登录",1000)
          this.$router.push('/login');
        }
      }
    }
	}
</script>

<style lang="less" scoped="scoped">
  .flex{
    display: flex;
  }
	.cart-bot-bar {
		position: fixed;
		bottom: 49px;
		left:0;
		right: 0;
		height: 40px;
		padding: 0 10px;
		font-size: 13px;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		border-bottom: 1px solid #ececec;
		border-top: 1px solid #ececec;
		.check {
			width: 18px;
			height: 18px;
			overflow: hidden;
			border-radius: 100%;
			vertical-align: bottom;
			border: 1px solid #ececec;
		}
		.check:checked {
			border: 1px solid var(----color-high-text);
			background: url(../../../assets/img/detail/check_active.png) no-repeat center;
			background-size: cover;
		}
	}
</style>
