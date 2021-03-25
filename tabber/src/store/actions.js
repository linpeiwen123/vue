export default {
  asynInfo(context, payload) {
    // 1、异步调用
    // setTimeout(() => {
    //   /**
    //    * 异步后必须调用mutations里面的方法，不可以绕过mutations，
    //    * 不然不会被Devtools监听到，容易引发数据混乱
    //    */
    //   context.commit(types.SETINFO)
    //   console.log(payload.message)
    //   payload.success()
    // }, 1000)

    // 2、使用Promise方式调用
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(payload)
        resolve("111111")
      }, 1000)
    })


  }
}
