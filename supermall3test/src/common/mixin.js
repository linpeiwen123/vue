import {debounce} from "./utils";
import BackTop from "../components/content/backTop/BackTop";

export const itemListenerMixin = {
  mounted(){
    const refresh = debounce(this.$refs.betscroll.refresh, 200)
    this.$bus.$on('imgLoad', () => {
      //再去加载一下srcollHeight的高度
      // this.$refs.betscroll.refresh()
      //执行防抖函数
      refresh()
    })
    console.log("我是混入的")
  }
}

//置顶混入v
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      backTopFlag: false
    }
  },
  methods:{
    //滚动顶部事件
    backClick() {
      // this.$refs.betscroll.scroll && this.$refs.betscroll.scroll.scrollTo && this.$refs.betscroll.scroll.scrollTo(0, 0,1000)
      this.$refs.betscroll.scroll.scrollTo(0, 0, 1000)
    }
  }
}
