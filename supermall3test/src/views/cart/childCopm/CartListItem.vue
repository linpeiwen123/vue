<template>
  <div>
    <!--<div class="cart-list-main flex" v-for="item in cartList" :key="item.iid">
      <div class="cart-list-left flex">
        <input type="checkbox" class="check" v-model="item.checked" @change="handleChange(item.checked)">
        <img :src="item.image" alt="" class="goods-img">
      </div>
      <div class="cart-list-right">
        <div class="goods-name one-txt-cut">{{item.title}}</div>
        <div class="goods-info flex">
          <span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
        </div>
      </div>
    </div>-->
    <van-swipe-cell :right-width="65" :left-width="0"  :on-close='onClose'  v-for="(item,index) in cartList" :key="item.iid">
      <van-cell-group class="cart-list-main flex">
        <div class="cart-list-left flex">
          <input type="checkbox" class="check" v-model="item.checked" @change="handleChange(item.checked)">
          <img :src="item.image" alt="" class="goods-img">
        </div>
        <div class="cart-list-right">
          <div class="goods-name one-txt-cut">{{item.title}}</div>
          <div class="goods-info flex">
            <span class="price">￥{{item.price}}</span><span>x{{item.count}}</span>
          </div>
        </div>
      </van-cell-group>
      <span class="cancel" slot="right" @click="del(item.iid)">删除</span>
    </van-swipe-cell>
  </div>
</template>

<script>
  import {Dialog} from "vant"

  export default {
    name: "CartListItem",
    data(){
      return{
        instance:""
      }
    },
    props: {
      cartList: Array,
      default() {
        return []
      }
    },
    mounted() {
      this.$bus.$on('itemCheck', (flag) => {
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].checked = flag
        }
      })
    },
    methods: {
      handleChange(flag) {
        let count = 0;
        for (let i = 0; i < this.cartList.length; i++) {
          if(this.cartList[i].checked === false){
            count++;
            break;
          }
        }
        if(count == 0){
          this.$bus.$emit("selectEntire",true)
        }else {
          this.$bus.$emit("selectEntire",false)
        }
      },
      onClose(clickPosition, instance){
        let e = window.event;
        e.preventDefault();
        e.stopPropagation()
        this.instance = instance
        instance.close();//这个函数就是让滑动的模块返回的操作  e.preventDefault()阻止默认行为;e.stopPropagation()阻止冒泡
        // console.log('正在左滑')
      },
      del(iid){
        Dialog.confirm({
          title: '标题',
          message: '弹窗内容',
        })
          .then(() => {
            this.$store.commit('delCarList', iid);
          })
          .catch(() => {

          });
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .flex {
    display: flex;
  }

  .cart-list-main {
    padding: 10px;
    border-bottom: 1px solid #ececec;
  }

  .cart-list-left {
    width: 26%;
    align-items: center;

    .check {
      width: 20px;
      height: 20px;
      overflow: hidden;
      border-radius: 100%;
      border: 1px solid #ececec;
    }

    .check:checked {
      background: url(../../../assets/img/detail/check_active.png) no-repeat center;
      background-size: cover;
    }

    .goods-img {
      width: 52px;
      height: 66px;
      overflow: hidden;
      border: 1px solid #ececec;
      margin: 0 10px;
      border-radius: 6px;
      vertical-align: middle;
    }
  }

  .cart-list-right {
    width: 74%;
    position: relative;

    .goods-name {
      width: 100%;
      font-size: 13px;
    }

    .goods-info {
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      .price {
        color: #F9CD0B;
      }
    }
  }




</style>
<style>
  .van-swipe-cell__right {
    /*display: inline-block;
    width: 65px;
    height: 44px;
    font-size: 15px;
    line-height: 44px;
    color: #fff;
    text-align: center;
    background-color: #f44;*/
    width: 65px;
    background: #ff8198;
    color: #fff;
    line-height: 78px;
    text-align: center;
  }
  van-swipe-cell__right:active{
    background: var(--color-high-text) !important;
  }
</style>
