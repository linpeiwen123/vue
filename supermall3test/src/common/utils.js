//防抖动函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)//timer等于null的时候清楚setTimeout
    timer = setTimeout(() => {
      func.apply(this, args)//func.apply去执行function的函数的方法
    }, delay)
  }
}
