import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import CarEmission from '../components/CarEmission.vue'
import Search from '../components/Search.vue'
import Quiz from '../components/Quiz.vue'
import Facts from '../components/Facts.vue'
import Trend from '../components/Trend.vue'



Vue.use(Router)
const router = new Router({
  routes:[
    {path:'/home',component:Home},
    {path: '/',component:Home,
    redirect: '/main',
    children:[
      {path:'/main',component:Main},
      {path:'/carEmission',component:CarEmission},
      {path:'/search',component:Search},
      {path:'/survey',component:Quiz},
      {path:'/facts',component:Facts},
      {path:'/trend',component:Trend},
    ]
  },
    
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // 如果有锚点，返回锚点元素的坐标
      return { selector: to.hash };
    } else {
      // 没有锚点，滚动到页面顶部
      return { x: 0, y: 0 };
    }
  }
})
export default router
