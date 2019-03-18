<template>
    <div class="mui-numbox" data-numbox-min='1'>
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1"
           @change="countChanged" ref="numBox"  />
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
    mounted() {
    mui(".mui-numbox").numbox();
  },
  methods:{
    countChanged(){
      // 每当文本框被修改的时候  立即吧最新的数据，通过时间调用，传递给父组件
      // console.log(this.$refs.numBox.value);
      this.$emit('getcount',parseInt(this.$refs.numBox.value))
    }
  },
  props:["max"],
  watch:{
    'max':function(newVal,odlVal){
      mui(".mui-numbox").numbox().setOption('max',newVal)
    }
  }
}
</script>





