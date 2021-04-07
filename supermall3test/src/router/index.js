import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const Cart = () => import("../views/cart/Cart")

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
