<template>
  <div class="goods-list">
    
<!-- <router-link class="goods-item"  v-for="index in goodList" :key="index.i" tag="div" :to="'/home/goodsinfo/'+index.id">

    
      <img :src="index.head_icon" alt="">
      <h1 class="title">{{index.area_province}}的{{index.name}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{index.weight}}</span>
          <span class="old">￥{{index.stature}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
</router-link> -->

 <div class="goods-item"  v-for="index in goodList" :key="index.i"
  @click="goDetail(index.id)"
  >
      <img :src="index.head_icon" alt="">
      <h1 class="title">{{index.area_province}}的{{index.name}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{index.weight}}</span>
          <span class="old">￥{{index.stature}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
</div>   
<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
  export default {
   data(){
     return{
     pageIndex:1,
     goodList:[],
     }
   },
   created(){
this.getGoodList()
   },
   methods:{
       getGoodList(){
         this.$http.get('../../../src/components/goods/page'+this.pageIndex+'.json').then(result=>{
             result.body.data.list.pop()
              // console.log(result.body.data.list);
               this.goodList= this.goodList.concat(result.body.data.list);
         })
       },
       getMore(){
         this.pageIndex++;
         if(this.pageIndex>3){
       Toast('无数据了')
         }else{
      return this.getGoodList();
         }
         
       },
       goDetail(id){
        //  方式1
        // this.$router.push('/home/goodsinfo/'+id);
        // 方式2
        // this.$router.push({path:'/home/goodsinfo/'+id})
        // 方式3
        this.$router.push({name:"goodsinfo",params:{ id }})
       }
   }



  }
</script>

<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
