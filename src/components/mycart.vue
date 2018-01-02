 <template>
<div>
 购物车	
 <div>
 	<li v-for="(item1,index) in carts" :key="index"><a href="'/plsist/'+item1.shopid+'/'+item1.shopname">{{item1.shopname}}</a>
 		<ul>
 			<li v-for="(item2,index) in item1.cart" :key="index">
 				{{item2.title}}
 			</li>
 		</ul>
 	</li>
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
import store from 'storejs';
import footerNav from '@/components/footer-nav.vue';
import $ from 'jquery';
export default {
 created:function(){
 	//读取数据
 	var carts = store.get("cart");
 		this.carts = carts;
 		var th = this;
    //底部导航数据
    $.get('https://easy-mock.com/mock/5a167443d8031f24f9a7a5f9/daojia/getFooterNav', function (res) {
      th.footerNavs = th.footerNavs.concat(res.data)
    }, 'json')
 },
  
   data:function(){
 	return{
 		carts:{},
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




