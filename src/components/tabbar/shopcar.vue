<template>
    <div class="shopcar-container">
     <div class="goods-list">
         <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
<mt-switch></mt-switch>
<img src="http://www.tbqq.com.cn/uploadFile/tmp/2018-06/2018-06-02/9c79e18a53e34b80b4103694b3babdbe.jpg" alt="" srcset="">
<div class="info">
    <h1>小米</h1>
    <p>

        <span class="pric">￥2199</span>
        <numbox></numbox>
        <a href="#">删除</a>
    </p>
</div>

					</div>
				</div>
			</div>
     </div>

     <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
    </div>
</template>

<script>
import numbox from "../suncomponents/shopcar_numbox.1.vue";
export default {
  data() {
    return {
        goodlist:[]
    }
  },
  created(){
      this.getGoodsList()
  }
  ,
  methods: {
    getGoodsList() {
      //  1.获取到store中所有商品的id然后拼接出一个字符串 用逗号分隔的字符串‘
      var idArr = [];
      this.$store.state.car.forEach(item =>  idArr.push(item.id));
    //   如果购物车没商品 直接返回 不需要请求接口 否则要报错
      if(idArr.length<=0){
          return
      }
      this.$http.get("../../../src/components/goods/json/"+idArr.join(",")+".json").then(result=>{
        //    if(result.body.code==0){
 console.log(result.body);
 this.goodlist = result.result.body.data.list
        //    }
      })
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      //  display: flex;
      //  flex-direction: column;
      //  justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
