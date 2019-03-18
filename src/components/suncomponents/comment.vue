<template>
    <div class="cmt-container">
        <h3>评论子组件</h3>
        <hr>
        <textarea name="" id="" 
        placeholder="最多120字" maxlength="120"
        ></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;
                发表时间:2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午 汗滴禾下土
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;
                发表时间:2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午 汗滴禾下土
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;
                发表时间:2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午 汗滴禾下土
            </div>
        </div>
        <div class="cmt-item">
            <div class="cmt-title">
                第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;
                发表时间:2012-12-12 12:12:12
            </div>
            <div class="cmt-body">
                锄禾日当午 汗滴禾下土
            </div>
        </div>
    </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data(){
      return{
          pageIndex:1,
          comments:[] //所有的评论数据
      }
  },
  created(){
this.getComments()
  },
  methods:{
      getComments(){
          console.log("这个评论功能有错");
        //   this.$http.get( "./"+this.id.json).then(result=>{
        //     //   if(result.body.state==0){
        //         //   console.log("6");
        // //   console.log(result.body);
        //     //   }else{
        //     //     Toast('获取失败')
        //     //   }
        //   })
      }

  },
  props:["id"]
}
</script>

<style lang="less" scoped>
.cmt-container{
    h3{font-size: 18px;}
    textarea{font-size: 14px;
      height: 85px;
    margin: 0;
    }
  
    .cmt-list{
        margin :10px 0 ;
        .cmt-item{
              font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background: #CCC;
            }
            .cmt-body{
                 line-height: 35px;
                 text-indent: 2em;
            }
        }
    }
}

</style>
