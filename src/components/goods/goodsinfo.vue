<template>
<div class="goodsinfo-container">
   
<transition
@before-enter="beforeEnter"
@enter="enter"
@after-enter="afterEnter"

>
  <div class="ball" v-show="ballFlag" ref="ball"></div>
</transition>

            <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <swiper :lunbotu="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.name}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                 <p class="price">
市场价:<del>￥{{goodsinfo.stature}}</del>&nbsp;&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.weight}}</span>
                 </p>
                 <p>
                     购买数量: <numbox @getcount="getSelectedCount"
                     :max="goodsinfo.star_level"
                     ></numbox>
                 </p>
                 <p>
                     <mt-button type="primary" size="small">立即购买</mt-button>
                     <mt-button type="danger" size="small" @click="addToshopCar">加入购物车</mt-button>
                 </p>
                </div>
            </div>
        </div>
           <div class="mui-card" >
            <div class="mui-card-header">详情</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                <p>身高:{{goodsinfo.stature}}</p>
                <p>库存:{{goodsinfo.star_level}}</p>
                <p>年龄:{{goodsinfo.age}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain  @click="goCommnet(id)">评论介绍</mt-button>
            </div>
        </div>
    
</div>
</template>

<script>
import swiper  from '../suncomponents/swiper.vue';
import numbox  from '../suncomponents/goodsinfo_numbox.vue';
export default {
  data(){
      return {
          id:this.$route.params.id,
          lunbotu:[],
          goodsinfo:{},
          ballFlag:false,
          selectedCount:1  //默认买一个
      }
  },
  created(){
this.getLunBotu();
this.getGoodsinfo();
  },

  methods:{
    getLunBotu(){
        this.$http.get('../../../src/components/goods/'+ this.id+'.json').then(result=>{
            if(result.body.code == 0){
                // console.log(result.body);
                result.body.data.list.forEach(item => {
                    item.head_icon =item.src
                });
                this.lunbotu = result.body.data.list
            }
        })
    },
    getGoodsinfo(){
        this.$http.get('../../../src/components/goods/json/'+this.id+'.json').then(result=>{
            if(result.body.code == 0){
          this.goodsinfo = result.body.data.list[0]
        //    console.log( this.goodsinfo);
            }
        })
    },
    goDesc(id){
                this.$router.push({name:"goodsdesc",params:{id}})
    },
    goCommnet(id){
                this.$router.push({name:"goodscommnet",params:{id}})
    },
    addToshopCar(){
        this.ballFlag=!this.ballFlag;
        var goodscont= { 
            id:this.id,
            count:this.selectedCount,
            price:this.goodsinfo.weight,
            selected:true 
            }
            // 调用store中的mutations 
            this.$store.commit('addToCar',goodscont)
    },
    beforeEnter(el){
        el.style.transform ="translate(0,0)";
    },
    enter(el,done){
          el.offsetWidth;
        // 获取小球的位置
        const ballPosition =this.$refs.ball.getBoundingClientRect()
//    获取徽标在页面的位置
   const badgePosition= document.getElementById('badge').getBoundingClientRect()
   const xDist = badgePosition.left-ballPosition.left
   const yDist = badgePosition.top-ballPosition.top
      
     el.style.transform=`translate(${xDist}px,${yDist}px)`;
        el.style.transition= "all .5s cubic-bezier(.4,-0.3,1,0.68)";
        done();
    },
    afterEnter(el){
         this.ballFlag=!this.ballFlag;
    },
    getSelectedCount(count){
        // 当子组件把选中的数量传递给父组件的时候 把选中的值保存到data上
          this.selectedCount = count;
          console.log("拿到的数量"+this.selectedCount);
    }
  } ,
  components:{
numbox,
swiper,


  },


};
</script>

<style lang="less" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
.now_price{
    font-size: 16px;
    color: red;
    font-weight: bold;
}
.mui-card-footer{
    display: block;
    button{
        margin: 15px 0;
    }
}
}
.ball{
    width:15px;
    height:15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99999999999;
    top: 390px;
    left: 146px;
}

</style>
