import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/components/home'
import plists from '@/components/plists'
import mycart from '@/components/mycart'
import Swiper from '@/components/swp'
import cate from '@/components/cate'
import order from '@/components/order'
import personal from '@/components/personal'


var router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      component: home,
    },
    {
      path:'/plists/:shopid/:shopname',
      component: plists,
    },
    {
      path:'/mycart',
      component: mycart,
    },
    {
      path:'/Swiper',
      component: Swiper,
    },
    {
      path:'/cate',
      component:cate,
    },
    {
      path:'/order',
      component:order,
    },
    {
      path:'/personal',
      component:personal,
    },
  ]
});
export default router