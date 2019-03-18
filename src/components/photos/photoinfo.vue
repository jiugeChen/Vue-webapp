<template>
    <div class="photoinfo-container">
        <h1>{{photoinfo.name}}</h1>
        <p class="subtitle">
            <span>年龄:{{photoinfo.age}}</span>
            <span>身高:{{photoinfo.stature}}cm</span>
        </p>
        <hr>
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list"
       :src="item.src" height="100" @click="$preview.open(index, list)" 
       :key="item.src">
    </div>

        <div class="content" v-html="photoinfo.area_province"></div>

<cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
import comment  from '../suncomponents/comment.vue'
export default {
  data(){
      return{
     id:this.$route.params.id,
     photoinfo:{},
     list:[],
      }
  },
  created(){
     this.getPhotoinfo() ;
     this.getThumbs();
  }
  ,methods:{
      getPhotoinfo(){
       this.$http.get('../../../src/components/photos/'+this.id+'.json').then(result=>{
        //    console.log(result.body.data.list[0]);
           this.photoinfo  = result.body.data.list[0]
       })
      },
      getThumbs(){
this.$http.get('../../../src/components/photos/photoList/'+this.id+'.json').then(result=>{
        //  console.log(result.body.data.list)
         result.body.data.list.forEach(item=>{
             item.w =600
             item.h =800
          
         })
        //  console.log(result.body.data.list);
         this.list =  result.body.data.list
}) 
      }
  },
  components:{
      'cmt-box':comment
  }
}
</script>

<style lang="less" scoped>
 .photoinfo-container{
     padding: 3px;
     h1{
         text-align: center;
         font-size: 16px;
         line-height: 30px;
         color: blue;
     }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    } 
 }
</style>
