<template>
    <div>
        <!-- 轮播图 -->
<swiper :lunbotu="lunbotuList" :isfull="true"></swiper>
        <!-- 九宫格到六宫格 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
    <img src="../../images/menu1.png" alt="" srcset="">
    <div class="mui-media-body">新闻资讯</div></router-link></li>

<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
     <img src="../../images/menu2.png" alt="" srcset="">
    <div class="mui-media-body">图片分享</div></router-link></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
     <img src="../../images/menu3.png" alt="" srcset="">
    <div class="mui-media-body">商品购买</div></router-link></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
     <img src="../../images/menu4.png" alt="" srcset="">
    <div class="mui-media-body">留言反馈</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
     <img src="../../images/menu5.png" alt="" srcset="">
    <div class="mui-media-body">视频分享</div></a></li>
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
     <img src="../../images/menu6.png" alt="" srcset="">
    <div class="mui-media-body">联系我们</div></a></li>
 </ul>

        <h1>home</h1>
    </div>
</template>

<script>
import  swiper from '../suncomponents/swiper.vue'
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [
        {"head_icon": "http://www.tbqq.com.cn/uploadFile/tmp/2018-06/2018-06-08/a0c9ef0ea575448798f838ebd2e75051.JPG",},
        {"head_icon": "http://www.tbqq.com.cn/uploadFile/tmp/2018-06/2018-06-08/a0c9ef0ea575448798f838ebd2e75051.JPG",}
      ]
    };
  },
  created() {
    // this.getLunbotu();
  },
  components:{
swiper,
  },
  methods: {
    // getLunbotu() {
    //   this.$http.get("./json.json").then(result => {
    //     console.log(result.data.list);
    //     if (result.body.state === 0) {
    //       this.lunbotuList = result.body.message;
    //     } else {
    //       Toast("加载轮播图失败...");
    //     }
    //   });
    // }
  }
};
</script>

<style lang="less" scoped>


.mui-grid-view.mui-grid-9{
	background-color: transparent;
    border: none;
    img{
        width: 60px;
        height: 60px;
    };
   .mui-media-body{
  font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}
</style>
