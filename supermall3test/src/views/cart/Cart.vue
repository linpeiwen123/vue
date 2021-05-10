<template>
  <div style="padding-top: 100px;">
    <div v-for="(item,index) in itemList" :key="index">
      <div class="top">{{item.circle}}
        <div :class="index % 2 == 0 ? 'top-left-xian' : 'top-right-xian'"></div>
        <div :class="index % 2 == 0 ? 'top-left-box' : 'top-right-box'">{{item.circleContent}}</div>
      </div>
      <div class="xian" v-if=" index != itemList.length -1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    data() {
      return {
        itemList:[
          {
            circle:"一级标题",
            circleContent:"标题陈述"
          },{
            circle:"一级标题",
            circleContent:"标题陈述"
          },{
            circle:"一级标题",
            circleContent:"标题陈述"
          },{
            circle:"一级标题",
            circleContent:"标题陈述"
          },{
            circle:"一级标题",
            circleContent:"标题陈述"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .top {
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px solid #ff7450;
    border-radius: 50px;
    left:50%;
    transform:translate(-50%,0);
    line-height: 100px;
    text-align: center;
  }

  .top-left-xian {
    position: absolute;
    top: 50%;
    width: 100px;
    height: 0px;
    left: 100px;
    border: 1px solid;
  }

  .top-left-box {
    position: absolute;
    border: 1px solid #e19868;
    width: 100px;
    height: 100px;
    left: 200px;
    top: 0px;
    border-radius: 10px;
  }
  .top-right-xian {
    position: absolute;
    top: 50%;
    width: 100px;
    height: 0px;
    right: 100px;
    border: 1px solid;
  }

  .top-right-box {
    position: absolute;
    border: 1px solid #e19868;
    width: 100px;
    height: 100px;
    right: 200px;
    top: 0px;
    border-radius: 10px;
  }
  .xian {
    position: relative;
    width: 1px;
    height: 73px;
    border: 1px solid;
    left:50%;
    transform:translate(-50%,0);
  }
</style>
