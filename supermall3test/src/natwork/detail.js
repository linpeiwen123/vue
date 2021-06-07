import {request} from "./request";

export function getDetailGoods(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class itemGoods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}

//请求推荐recommend
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
