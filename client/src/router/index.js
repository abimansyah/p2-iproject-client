import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/exchange',
    name: 'Exchange',
    component: () => import('../views/Exchange.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('../views/Favorite.vue')
  },
  {
    path: '/cryptocurrency/:uuid',
    name: 'cryptocurrency',
    component: () => import('../views/Cryptocurrency.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/Cryptocurrency.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === "/register" && localStorage.access_token || to.path === "/login" && localStorage.access_token){
    next('/')
  } else if(to.path === "/favorite" && !localStorage.access_token) {
    next('/')
  } else {
    next()
  }
})

export default router
