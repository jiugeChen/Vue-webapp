<template>
  <div class="app-container">
    <mt-header fixed title="九歌科技站"></mt-header>

<transition>
<router-view></router-view>
</transition>
    
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-lib" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-lib" to="/shopcar">
				<span class="mui-icon mui-icon-extra  mui-icon-extra-cart">
					<span class="mui-badge"  id="badge">{{$store.getters.getAllcount}}</span></span>
				<span class="mui-tab-label">购物车 </span>
			</router-link>
	
			<router-link class="mui-tab-item-lib " to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
 export default {


 }
</script>


<style lang="less" scoped>
.mint-header{
	z-index: 9999999;
}
.v-enter,{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
		position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
.app-container{
	overflow-x: hidden;
	padding-top: 40px; 
	padding-bottom: 50px;

}
.mui-bar-tab {
	z-index: 99999999;
}
.mui-bar-tab .mui-tab-item-lib {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-lib .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-lib.mui-active {
    color: #007aff;
}

</style>
