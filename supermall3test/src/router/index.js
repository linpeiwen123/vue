import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const Cart = () => import("../views/cart/Cart")
const Detail = () => import("../views/detail/Detail")
const Login = () => import("../views/login/Login")

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
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
