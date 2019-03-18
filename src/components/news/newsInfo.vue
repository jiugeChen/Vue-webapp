<template>
    <div  class="newsInfo-container">
        <h1 class="title">{{ newsInfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.time|dateFormat('YYYY-MM-DD')}}</span>
            <span>点击次数:{{newsInfo.count}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.news"></div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
// 1导入子组件
import comment from '../suncomponents/comment.vue'
export default {
data(){
    return {
        id:this.$route.params.id ,//将url地址中id值 挂载到到data上方便以后调用
        newsInfo:{},
    }
},
 created(){
      this.getNewsInfo();
 },
methods:{
      getNewsInfo(){
          this.$http.get('./'+this.id+'.json').then(result=>{
               if(result.body.state==0){
                //    console.log(result.body.messcount);
                   this.newsInfo = result.body.messcount[0];
                //    console.log(this.newsInfo);

               }else{
                   Toast("获取新闻失败" +this.id)
               }
          })
      }
},
components:{
    'comment-box':comment
}
}
</script>

<style lang="less" scoped>
.newsInfo-container{
    padding:  0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{

    }
}
</style>
