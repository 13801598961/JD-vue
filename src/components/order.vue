<template>
	<div>
		<div v-for="(item,index) in orders" :key="item.id" >
			<p>{{item.shopname}}--<b>{{item.curstatus}}</b></p>
			
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
import $ from "jquery";
var url = "https://easy-mock.com/mock/5a2a34b788da413c1e610f67/daoji/order";

export default {
	
	created(){
		var th = this;
		$.get(url,function(res){
		th.orders = th.orders.concat(res.data)
		},'json')
		$.get('https://easy-mock.com/mock/5a167443d8031f24f9a7a5f9/daojia/getFooterNav', function (res) {
      th.footerNavs = th.footerNavs.concat(res.data)
    }, 'json')
	},
  data:function(){
  	return{
  		orders:[],
  		footerNavs:[],
  	}
  },
  components: {
    'footer-nav':footerNav,
  },
}
</script>

<style lang="css" scoped>
.footer {
    background: white;
    position: fixed;
    bottom: 0px;
    height: 50px;
    width: 100%;
    border: 1px solid #f3f3f3;
}
</style>