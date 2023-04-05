import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
// import Test from '../components/Test.vue'
import Main from '../components/Main.vue'
import CarEmission from '../components/CarEmission.vue'
import Search from '../components/Search.vue'
import Daily from '../components/Daily.vue'
import Clothing from '../components/Daily/Clothing.vue'
import Food from '../components/Daily/Food.vue'
import Housing from '../components/Daily/Housing.vue'
import Travel from '../components/Daily/Travel.vue'

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
      {path:'/daily',component:Daily,redirect: '/clothing',
      children:[
        {path:'/clothing',component:Clothing},
        {path:'/food',component:Food},
        {path:'/housing',component:Housing},
        {path:'/travel',component:Travel},
      ]
    }
    ]
  },
    
  ]
})
export default router
