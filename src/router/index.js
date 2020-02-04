import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  // 自动重定向到login
  {
    path: '/',
    // name: 'home',
    // component: Home
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newpage" */ '../views/Newpage.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "newpage" */ '../views/Login.vue')
  },
  // {
  //   path: '/main',
  //   name: 'main',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "newpage" */ '../views/Main.vue'),
  //   // component: Main,
  //   redirect: '/welcome',
  //   children: [
  //     { path: '/welcome', name: 'welcome', component: () => import(/* webpackChunkName: "newpage" */ '../views/Welcome.vue') },
  //     { path: '/page2', name: 'page2', component: () => import(/* webpackChunkName: "newpage" */ '../views/Page2.vue') },
  //     { path: '/userlist', name: 'userlist', component: () => import(/* webpackChunkName: "newpage" */ '../views/UserList.vue') }
  //   ]
  // },
  {
    path: '/tabsmain',
    name: 'tabsmain',
    component: () => import(/* webpackChunkName: "newpage" */ '../views/TabsMain.vue'),
    redirect: '/welcome',
    children: [
      { path: '/welcome', name: 'welcome', component: () => import(/* webpackChunkName: "newpage" */ '../views/Welcome.vue') },
      { path: '/page2', name: 'page2', component: () => import(/* webpackChunkName: "newpage" */ '../views/Page2.vue') },
      { path: '/userlist', name: 'userlist', component: () => import(/* webpackChunkName: "newpage" */ '../views/UserList.vue') }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由守卫
// to 将要访问的路径
// from 从哪里路径来
// next 放行函数
router.beforeEach(function (to, from, next) {
  // 登录页放行
  if (to.path == '/login') {
    next()
  } else if (to.path == '/main') {
    next()
  } else if (to.path == '/tabsmain') {
    next()
  }

  // 判断是否又token, 没有强制返回login页
  else {
    const tokenstr = window.localStorage.getItem('token')
    // console.log(tokenstr)
    if (!tokenstr) {
      return next('/login')
    } else {
      next()
    }
  }
})

export default router
