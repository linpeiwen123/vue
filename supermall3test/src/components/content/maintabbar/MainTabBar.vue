<template v-slot>
    <Tabber>
        <Tabberitme path="/home">
            <i slot="table-icno" class="iconfont icon-shouye"></i>
            <div slot="tabber-test">首页</div>
        </Tabberitme>
        <Tabberitme path="/category">
            <i slot="table-icno" class="iconfont icon-fenlei1"></i>
            <div slot="tabber-test">分类</div>
        </Tabberitme>
        <Tabberitme path="/cart">
            <i slot="table-icno" class="iconfont icon-xiazai1" style="font-size: 27px;"></i>
            <div slot="tabber-test">购物车</div>
        </Tabberitme>
        <Tabberitme path="/profile">
            <i slot="table-icno" class="iconfont icon-my_icon"></i>
            <div slot="tabber-test">我的</div>
        </Tabberitme>
    </Tabber>
</template>

<script>
    import Tabber from "../../common/tabber/Tabber"
    import Tabberitme from "../../common/tabber/Tabberitme";
    export default {
        name: "MainTabBar",
        components:{
            Tabber,
            Tabberitme
        }
    }
</script>

<style scoped>

</style>
