import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Category from '@/views/Category'
import Order from '@/views/Order'
import My from '@/views/My'
Vue.use(VueRouter)    //注册全局组件RouterLink，RouterView
const routes = [
  {
    path:'/',     //网页默认打开路由路径是”/“
    redirect:'/Home'    //强制修改url上路由路径为/home
  },
  {
    path:'/Home',
    component: Home
  },
  {
    path:'/Category',
    component: Category
  },
  {
    path:'/My',
    component: My
  },
  {
    path:'/Order',
    component: Order
  },
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

  //目标：一级路由切换
  // 1.准备4个.vue文件 -4个页面
  // 2.开始使用vue-router
    // （1）下载vue-router
    // （2）main.js中，引入VueRouter函数对象
    // （3）Vue.use(VueRouter)全局注册2个组件
    // （4）定义规则数组
    // （5）生成路由对象
    // （6）在new Vue中传入路由对象
    // （7）设置router-view，用于显示切换组件
  // 3.APP.vue里设置声明式导航
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
