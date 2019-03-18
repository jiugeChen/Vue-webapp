import VueRouter from 'vue-router'



import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'
import newList from  './components/news/newsList.vue'
import newsInfo from  './components/news/newsInfo.vue'
import photoList from  './components/photos/photoList.vue'
import photoinfo from  './components/photos/photoinfo.vue'
import goodsList from  './components/goods/goodsList.vue'
import goodsinfo from  './components/goods/goodsinfo.vue'
import goodsdesc from  './components/goods/goodsdesc.vue'
import goodscommnet from  './components/goods/goodscommnet.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
  {  path:'/', redirect:'/home'},
  {  path:'/home',component:home },
  {  path:'/member',component:member },
  {  path:'/search',component:search },
  {  path:'/shopcar',component:shopcar },
  {  path:'/home/newslist',component:newList },
  {  path:'/home/newsInfo/:id',component:newsInfo },
  {  path:'/home/photoList',component:photoList },
  {  path:'/home/photoinfo/:id',component:photoinfo },
  {  path:'/home/goodsList',component:goodsList },
  {  path:'/home/goodsinfo/:id',component:goodsinfo,name:'goodsinfo' },
  {  path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc' },
  {  path:'/home/goodscommnet/:id',component:goodscommnet,name:'goodscommnet' },
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router