  <template>
	<div>
		<div class="topImg">
			<div class="ruBt">
				<i class="fa fa-map-marker"> </i><span class="nanJ">南京</span><i class="fa fa-angle-down"></i>
				<p class="ruTy">
					<i class="fa fa-search"></i>
					<input type="text" placeholder="附近商品商品" class="inp">
				</p>
				<i class="fa fa-bell-o"></i>
			</div>
		<div class="swiper-container">
	    <div class="swiper-wrapper">
	    		<div class="swiper-slide"><img src="/static/img/12.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="/static/img/pic_055.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="/static/img/pic_056.jpg" alt=""></div>
	        <div class="swiper-slide"><img src="/static/img/pic_057.jpg" alt=""></div>
	    </div>
	    <div class="swiper-pagination"></div>
		</div>
		</div>
		<div class="header">
			<ul class="nav">
				<li v-for="(list,index) in navlists" :key="index" ><top-nav :text="list.text" :csrc="list.csrc" /> </li>         
			</ul>
		</div>
		<div class="ht"></div>
		<img src="/static/img/6.png" alt="">
		<div class="ht"></div>
		<img src="/static/img/pic_066.jpg" alt="">
		<div class="ht"></div>


		<div class="border">
			<div class="bor">
				<span class="shu">限时秒杀</span>
				<p class="keqi">秒杀抢不停</p>
				<img src="/static/img/pic_067.png" alt="">
			</div>

			<div class="der">
				<div class="LeftTop">
					<span class="shui">鲜果大促</span>
					<p class="zhe">低至48折</p>
					<img src="/static/img/pic_068.png" alt="">
				</div>
				<div class="LeftBottom">
					<span class="shui">纸品洗化</span>
					<p class="zhe">低至48折</p>
					<img src="/static/img/pic_069.png" alt="">
				</div>
				<div class="RightTop">
						<span class="shui">鸡腿1元</span>
					<p class="zhe">低至48折</p>
					<img src="/static/img/pic_070.png" alt="">
				</div>
				<div class="RightBottom">
						<span class="shui">零食工坊</span>
					<p class="zhe">低至48折</p>
					<img src="/static/img/pic_071.png" alt="">
				</div>
			</div>
		</div>
		<div class="ht"></div>
		<img src="/static/img/pic_065.jpg" alt="">
		<div class="ht"></div>
		<div class="tab">
			<div class="lan"></div><span class="june">附近的店铺</span> <div class="tan"></div>
			<img src="/static/img/pic_053.gif" alt="">
		</div>
		<div class="content">
			<shop-list :id="shopList.id" :title="shopList.title" :img="shopList.img"
			:star="shopList.star" v-for="(shopList,index) in shopLists" :key="shopList.id"/>
			<button @click="getMore" class="btn btn-info"><i class="fa fa-spinner"></i></button>
		</div>


		<div class="footer">
			<div class="av"></div>
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
import'../../node_modules/swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
import img1 from '@/assets/logo.png'
import topNav from '@/components/top-nav.vue'
import shopList from '@/components/shop-list.vue'
import footerNav from '@/components/footer-nav.vue'
import $ from 'jquery'
export default {	
	created: function () { 
		var th = this;
		//顶部导航
		$.get('https://www.easy-mock.com/mock/5a167443d8031f24f9a7a5f9/daojia/gettopnav', function (res) {
			th.navlists = th.navlists.concat(res.data)
		}, 'json')
		//商家列表
		$.get('https://easy-mock.com/mock/5a2a34b788da413c1e610f67/daoji/getCtgLists', function (res) {
			th.shopLists = th.shopLists.concat(res.data)
		}, 'json')        

		//底部导航数据
		$.get('https://easy-mock.com/mock/5a167443d8031f24f9a7a5f9/daojia/getFooterNav', function (res) {
			th.footerNavs = th.footerNavs.concat(res.data)
		}, 'json')
	},
	methods: {
		getMore: function () {//加载更多
			var th = this;
			$.get('https://easy-mock.com/mock/5a2a34b788da413c1e610f67/daoji/getCtgLists', function (res) {
				th.shopLists = th.shopLists.concat(res.data)
			}, 'json')
		}
	},
	data: function () {
		return {
			navlists: [],
			shopLists: [],
			footerNavs:[],
		}
	},
	
	components: {
		'top-nav': topNav,
		'shop-list': shopList,
		'footer-nav':footerNav,
	},
	mounted: function () {
		var mySwiper = new Swiper ('.swiper-container', {
		autoplay:true,
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })     
		var th = this;
		var flag = true;//保证每次加载完后不在重复加载
		window.addEventListener('scroll', function () {
			if (flag) {
				setTimeout(function () {
					var scrollHeight = document.documentElement.scrollHeight;//获取内容高度
					var clientHeight = document.documentElement.clientHeight;//可视高度
					var scrollTop = document.documentElement.scrollTop;//滚动高度
					//当滚动条距离底部50个像素的时候执行
					if (scrollTop + clientHeight >= scrollHeight - 50) {th.getMore()}
					flag = true//每次滚动完后，设置true，保证下次滚动代码继续执行
				}, 500)
				flag=false;
			}
		})
	}
}
</script>
<style>
* {
  box-sizing: border-box;
}
.ruBt{	
	width: 100%;
	clear: both;
	position:absolute;
	top:10px;
	z-index: 2;
}
.fa-map-marker{
	float: left;
	color: #fff;
	font-size: 16px;
	margin-left: 5px;
	margin-top: 5px;

}
.fa-angle-down{
	float: left;
	color: #fff;
	font-size: 16px;
	margin-top: 8px;
	margin-left: 2px;
}
.nanJ{
	float: left;
	color: #fff;
	font-size: 16px;
	margin-top: 5px;
	margin-left: 2px;
	
}
.ruTy{
	float: left;
	color: #fff;
	margin-left:10px;
	width: 70%;
	height: 30px;
	line-height: 30px;
  text-align: left;
	border-radius: 20px;
	background: rgba(255,255,255,0.35);
	font-size: 14px;
}
.fa-search{
	margin:10px;
}
.fa-bell-o{
	margin-top:8px;
	margin-right:20px;
	float: right;
	color: #fff;
	font-size: 20px;
}
.inp{
	background: none;
	border: none;
	outline-style: none;
	width: 80%;
	font-size: 15px;
}
.swiper-container {
    width: 100%;
    height: 180px;
}  
.swiper-slide img{
	width: 100%;
  height: 100%;
}
.topImg{
	height:180px;
	width:100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
}
ul li {
  overflow: hidden;
  width: 20%;
  height:15%;
  float: left;
}
.header{
	height: 104px;
	width: 100%;
}
img{
	height:100%;
	width: 100%;
}
.ht{
	height:8px;
	width: 100%;
	background:#f4f4f4;
}
.border{
	height:211px;
	width: 100%;

}
.bor{
	float: left;
	height:211px;
	width: 40%;
	border: 1px solid #f3f3f3f3;
	text-align: center;
	border-top: none;
	border-left: none;
	border-bottom: none;
}
.shu{
	float: left;
	height:30px;
	width: 100%;
	margin-top: 30px;
	color: #ff5c5c;
	font-size: 22px;
	font-weight: bold;
	font-family: "仿宋体";

}
.keqi{
	font-size: 12px;
	margin-top: 12px;
	color: #b8b8b8;
}
.bor img{
	height: 75px;
	width: 75px;
	margin-top: 25px;
}

.der{
	float: right;
	height:211px;
	width: 60%;	
}
.LeftTop{
	float: left;
	height: 105px;
	width: 50%;
	border: 1px solid #f3f3f3;
	text-align: center;
	border-top: none;
	border-left: none;
	border-bottom: none;
}
.LeftTop .shui{
	font-size: 12px;
	font-family: "宋体";
	font-weight: bold;
}
.LeftTop img{
	height: 50px;
	width: 50px;
}
.LeftTop .zhe{
	font-size: 12px;
	color: #a9b7a4;
}
.LeftBottom{
	clear: both;
	float: left;
	height: 105px;
	width: 50%;
	border: 1px solid #f3f3f3;
	text-align: center;
	border-left: none;
	border-bottom: none;
}
.LeftBottom .shui{
	font-size: 12px;
	font-family: "宋体";
	font-weight: bold;
}
.LeftBottom img{
	height: 50px;
	width: 50px;
}
.LeftBottom .zhe{
	font-size: 12px;
	color: #a9b7a4;
}
.RightTop{
	float: right;
	margin-top: -105px;
	height: 105px;
	width: 50%;
	text-align: center;
}
.RightTop .shui{
	font-size: 12px;
	font-family: "宋体";
	font-weight: bold;
}
.RightTop img{
	height: 50px;
	width: 50px;
}
.RightTop .zhe{
	font-size: 12px;
	color: #a9b7a4;
}
.RightBottom{
	float: right;
	height: 105px;
	width: 50%;
	border: 1px solid #f3f3f3;
	text-align: center;
	border-left: none ;
	border-right: none;
	border-bottom: none;
}
.RightBottom .shui{
	font-size: 12px;
	font-family: "宋体";
	font-weight: bold;
}
.RightBottom img{
	height: 50px;
	width: 50px;
}
.RightBottom .zhe{
	font-size: 12px;
	color: #a9b7a4;
}
.btn{
	width: 100%;
	border: none;
	text-align: center;
	color: #A3A3A3FF;
	background: none;
}
p .text{
	font-size:10%;
}
.tab{
	height: 50px;
	width: 100%;
}
.tab img{
	position: relative;
	z-index: 2;
	height: 75px;
	width: 75px;
 	top: -60px;
 	left: 50px;
}

.lan{
	float: left;
	height: 2px;
	width:20%;
	background: #bfbfbf;
	margin-top: 25px;
	margin-left: 74px;
}
.june{
	float: left;
	font-weight:bold;
	color: #606060;
	font-size: 18px;
	margin-top: 15px;
	margin-left: 10px;
}
.tan{
	float: left;
	height: 2px;
	width:20%;
	background: #bfbfbf;
	margin-top: 25px;
	margin-left: 10px;
}
.content{
	margin-bottom:150px; 
}
.content img{
	height: 100px;
	width: 100px;
}
.footer{
	background: white;
	position: fixed;
	bottom: 0px;
	height: 50px;
	width: 100%;
	border:1px solid #f3f3f3;
}
.av{
	height: 82px;
	width: 100%;
	background: url('/static/img/download_0808.png')bottom center no-repeat;
	line-height: 18px;
	color: #fff;
	font-size: 13px;
	background-size: 100%;
	position: fixed;
	bottom: 50px;
	left: 0;
	right: 0;
	z-index: 100;
  }
</style>



