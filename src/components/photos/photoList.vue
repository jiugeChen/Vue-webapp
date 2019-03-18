<template>
    <div>
        <div id="slider" class="mui-slider">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item',index.id==0?'mui-active':'']" href="#item1mobile"
                 v-for="index in ClassList" :key="index.id" @tap="getPhotoList(index.id)">
                   {{ index.title}}
                </a>

            </div>
        </div>

    </div>
<ul class="photo-list">
    <router-link v-for="item in list" :key="item.id" 
     :to="'/home/photoinfo/'+ item.id"
     tag="li" >
        <img v-lazy="item.head_icon">
        <div class="info">
            <h1 class="info-title">{{item.name}}</h1>
            <div class="info-body">
地区:{{item.area_province}}{{item.area_city}} <br>
年龄:{{item.age}}<br>
身高:{{item.stature}}<br>
体重:{{item.weight}}

            </div>
        </div>
    </router-link>
</ul>

    </div>
</template>

<script>
// 1. 导入mui的js文件
import mui from "../../lib/mui/js/mui.js";
// 如果要操作元素最好在mounted里面 因为这时候dom元素是最新的
// 2. 初始化滑动控件
export default {
  data() {
    return {
      ClassList: [], //所有分类
      list: [] //图片列表
    };
  },
  created() {
    this.getClassList();
    this.getPhotoList(0);
  },
  mounted() {
    //当组件中DOm的结构被渲染好并放到页面中的时候会执行这个钩子函数
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getClassList() {
      this.$http
        .get("../../../src/components/photos/photoLlist.json")
        .then(result => {
          // console.log(result.body);
          result.body.message.unshift({ title: "全部", id: "0" });
          // console.log(result.body);
          this.ClassList = result.body.message;
        });
    },
    getPhotoList(cateId) {
      //根据分类写id
      this.$http
        .get("../../../src/components/photos/photoList/" + cateId + ".json")
        .then(result => {
          // console.log(result.body.data.list);
          this.list = result.body.data.list;
          console.log(this.list);
        });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y; //去掉滑动警告
}
.photo-list {
    margin: 0;
    padding: 10px;
  li {
    position: relative;
    list-style: none;
    background-color: #ccc;
    text-align: center;
    margin-top: 10px;
    box-shadow: 0 0 10px #999;
    .info{
         color: white;
        .info-title{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: white;
        }
        width: 100%;
        height: 150px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        bottom: 0;
        left: 0;

    }
    img{
       width: 100%;
       vertical-align: middle;
    }
    img[lazy="loading"] {
       
      width:40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>
