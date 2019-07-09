import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SingleBlog from './views/SingleBlog.vue'
import EditBlog from './views/EditBlog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      //懒加载提高响应速度
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      //在single-blog中以this.$route.params.id接收参数
      path: '/blog/:id',
      component: SingleBlog
    },
    {
      path: '/edit/:id',
      component: EditBlog
    }
  ]
})
