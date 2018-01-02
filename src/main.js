import Vue from 'vue'
import router from '@/router/home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



var vm = new Vue({
  el:'#app',
  data:{
  	bus:new Vue()
  },
  router,
  template:'<div><router-view/></div>'
})