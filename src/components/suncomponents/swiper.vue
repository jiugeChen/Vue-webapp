<template>
    <div>
          <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="item in lunbotu" :key="item.id">
               
         
                <img :src="item.head_icon" :class="{'full':isfull}">
            </mt-swipe-item>
         
        </mt-swipe>
    </div>
</template>

<script>
export default {
  props:["lunbotu","isfull"]
}
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;

.mint-swipe-item {
   text-align: center;
  &:nth-child(1) {
    background-color: pink;
  }
  &:nth-child(2) {
    background-color: pink;
  }
  &:nth-child(3) {
    background-color: pink;
  }
}}
.full{
    width: 100%;
}
</style>
