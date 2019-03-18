<template>
    <div>
      <ul class="mui-table-view">
<li class="mui-table-view-cell mui-media"
v-for="index in newsList" :key="index.id"
 >
        <router-link :to="'/home/newsInfo/'+index.id">
            <img class="mui-media-object mui-pull-left" :src="index.head_img">
            <div class="mui-media-body">
                <h1>{{index.title}}</h1>
                <p class="mui-ellipsis">
                    <!-- <span>我只有年月日:{{index.time|dateFormat('YYYY-MM-DD')}}</span> -->
                    <span>发表时间:{{index.time|dateFormat()}}</span>
                    <span>点击:{{index.count}}次</span>
                    </p>
            </div>
        </router-link>
    </li>




			</ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default{
  data(){
return {
    newsList:[] //列表
}
  },
  mounted(){
      this.getNewsList();
  },
  methods:{
      getNewsList(){
          this.$http.get('./json.json').then(result =>{
              if(result.body.state==0){
                //   console.log(result.body);
                   this.newsList =result.body.messcount
              }else{
                  Toast('获取新闻列表失败')
              }
          })

  }

    }
    }
</script>
<style lang="less" scoped>
.mui-table-view{
    li {
        h1{font-size: 14px; }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>

