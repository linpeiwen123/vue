import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/tabber/Home")
const Classification = () => import("../views/tabber/Classification")
const User = () => import("../views/tabber/User")
const Cart = () => import("../views/tabber/Cart")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/classification',
      component:Classification
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/cart',
      component:Cart
    },
  ],
  mode:"history",
})
