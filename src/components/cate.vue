<template>
  <div>
  	<div class="top">
  		<div class="con">
      <div class="coning">
        <i class="fa fa-search"></i>
        <input type="text" placeholder="搜索附近商品和门店" class="put">
      </div>
    </div>
  	</div>
     
     <div class="menu-left scrollbar-none" id="sidebar">
  
    </div>

    <div class="footer">
       <ul class="nav">
        <li v-for="(nav,index) in footerNavs" :key="index" > 
        <footer-nav :text="nav.text" :icon="nav.icon"
        :url="nav.url" />    
         </li>         
      </ul>
    </div>
 
  </div>
</template>
<script>
import footerNav from '@/components/footer-nav.vue';
import $ from 'jquery';
export default {
 created: function () { 
    var th = this;
    //底部导航数据
    $.get('https://easy-mock.com/mock/5a167443d8031f24f9a7a5f9/daojia/getFooterNav', function (res) {
      th.footerNavs = th.footerNavs.concat(res.data)
    }, 'json')
  },
 
  data: function () {
    return {
      
      footerNavs:[],
    }
  },
  
  components: {
    'footer-nav':footerNav,
  },
}
</script>
<style lang="css" scoped>
*{
	margin: 0;
	padding: 0;
}
.top {
	background: #ffff;
	height: 30px;
	width: 100%;
}
.con{
	text-align:left;
	margin: 5px auto;
	border-radius: 2px;
	border: 2px solid #f4f4f4;
	height: 28px;
	width: 80%;
}
.fa {
	float: left;
	margin: 5px;
	color: #f4f4f4;
	font-size: 18px;
}
.put {
	margin: 5px;
	outline: none;
	background: none;
	border: none;
}
.footer {
    background: white;
    position: fixed;
    bottom: 0px;
    height: 50px;
    width: 100%;
    border: 1px solid #f3f3f3;
}
</style>
