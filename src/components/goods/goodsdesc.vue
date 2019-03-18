<template>
    <div>
        <h3>图文</h3>
        <img :src="info.src" alt="">
        
    </div>
</template>

<script>
export default {
      data(){
          return{
              info:{},
              id:this.$route.params.id
          }
      },
      created(){
this.gettw()
      }
      ,
      methods:{
  gettw(){
      this.$http.get('../../../src/components/goods/json/'+this.id+'.json').then(result=>{
         if(result.body.code==0){
this.info=result.body.data.list[0]
         }
      })
  }
      }
}
</script>
<style lang="less" scoped>
div img{
    width: 100%;
}
</style>





