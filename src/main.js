// 入口文件
import Vue from 'vue'
// 导入app.vue
import app  from './App.vue'
// 导入路由的包1.1
import VueRouter from 'vue-router'
// 1.2安装router
Vue.use(VueRouter);
// 1.3导入自己的路由模块
import router from './router.js'


// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
   return  moment(dataStr).format(pattern) 
})

// 导入mint-ui中的组件
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)

// 注册vuex
import Vuex from 'vuex';
Vue.use(Vuex);
// 从本第读取文件信息
var car =  JSON.parse(localStorage.getItem('car')||'[]')
const store = new Vuex.Store({
  state:{

    car:car
  },
  mutations:{
  addToCar(state,goodscont){
     
var flag =false
     state.car.some(item=>{
       if(item.id==goodscont.id){
         item.count += parseInt(goodscont.count)
         flag=true
         return true
       }
     })
   if(!flag){
  state.car.push(goodscont)
   }
  //  当更新car 吧car存储到localStorage中 
  localStorage.setItem('car',JSON.stringify(state.car))
  }

  },
  getters:{
    getAllcount(state){
var c=0;
state.car.forEach(item=>{
   c+=item.count
})
return c
    }
  }

})

import MinUI from 'mint-ui'
Vue.use(MinUI)
import 'mint-ui/lib/style.css'


// 2.1导入vue-resource
import VueResource from 'vue-resource'
// 2.安装-resource
Vue.use(VueResource)
// 设置请求的根路径
// Vue.http.options.root = '/'


// 导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



var vm = new Vue({
  el: '#app',
  render: c => c(app),
//  1.4挂载路由对象到实例上
  router,
  store
})
 
