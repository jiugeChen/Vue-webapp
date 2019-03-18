# 这是一个NB的项目

## 牛不牛逼， 用心去感受，每一行代码中的诗情雅意

### 我们是有灵魂程序员，所以，我们的代码富有诗意；

#### 丫的，实在编不下去了,哈哈哈

## [主流开源协议之间有何异同？](https://www.zhihu.com/question/19568896)

## 用(传统方式)命令行把修改过后的代码上传到码云？？？
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
 + 在制作 购物车 小图标的时候，操作会相对多一些：
 + 先把 扩展图标的 css 样式，拷贝到 项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据， 如何获取呢， 使用 vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式


### 改造新闻资讯路由链接
##  新闻资讯 页面 制作 
1.绘制界面  使用 mui中的 media-list.html
2.使用 vue-resourse 获取数据 
3.渲染 数据真是数据

## 实现新闻资讯列表 跳转到新闻详情

1.把列表的每一项该造为router-link，同时在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中 将 新闻详情 的路由地址和 组件页面对应起来

## 实现新闻详情的页面布局 和数据渲染


## 单独封装一个comment.vue 评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件中的页面中 先手动导入comment组件
3.import comment from './commnet.vue'
3.在父组件中 使用 componnets 属性 将刚才导入的comm 组件 注册为子组件
4.将注册子组件时候的 注册名称 以标签的形式 在页面中引用即可 


##  获取所有的评论数据显示到页面中



####################################################3

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
1.制作顶部滑动跳
2.制作底部的图片列表
#### 制作顶部滑动条的坑
1.需要使用借助于 tab-top-webview-main.html
2.拿过来有一个 mui-fullscreen类去掉。
3.滑动条无法正常触发滑动 通过检查官方文档 这是一个js组件 需要被初始化一下
   1)导入mui.js
   2)调用官方提供的方式 去初始化：
   `
   mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
   `
4. 我们在初始化 滑动条 的时候 导入的mui.js 但是控制台报错
'caller', 'callee', and 'arguments' properties may not be accessed
进过我们合理的推测，觉得，可能是mui.js中用到了 'caller', 'callee'， 'arguments'
但是webpack打包好的bundle.js 中 默认是启用严格模式的，所以这两者冲突了；
   解决方案：
   1>  把mui.js中的非严格 模式的代码改掉 ---不现实
   2>  把webpack打包时候的严格模式禁用掉 
    babel-plugin-transform-remove-strict-mode -D 
    
     会报错 （取消报错touch-action: pan-y; //去掉滑动警告）并且第一次进入页面无法滑动滚动条
    如果要初始化 滑动条 必须要等Dom元素加载完毕 所以我们把初始化 滑动条的代码，搬到mounted声明周期函数中

    当 滑动条 调试ok后 发现tabbar无法正常工作 我们把这个类 mui-tab-item重新改一下名字






    ### 图片列表需要懒加载
    1.mint ui 有现成的组件 叫做lazy load
    2.根据lazy- load文档 尝试使用
    3.渲染图片数据
    2018年8月12日21:39:56


    









