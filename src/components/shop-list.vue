<template> 
    <div class="chunk">
    	<img :src="'/static/img/'+img" alt="" class="TuHua">
    	<div class="chuntu">
    		 <h2 class="title">
					<a :href="'/plists/'+id+'/'+title">{{title}}</a>
				</h2>
				<p class="dada">哒哒专送-58分钟</p>
        <p class="star">{{star}}<span class="an">|月售2389</span></p>
        <p class="desc">{{desc}}</p>
        <p class="biao">0元起送，距离2.66KM</p>
    	</div>
       <div class="po">
       	 <div class="yu"></div>
        <div class="state"><p class="ling">领卷</p><span class="hil">8.8折劵,满39减10,满35减6</span></div>
        <div class="states"><p class="man">满减</p><span class="hill">宝路维嘉部分满99件30</span></div>
       </div>
        <div class="ro">
        	<p class="roar">
        		 	<img src="/static/img/pic_076.jpg" alt="">
        		 	<span class="pan">￥10.8</span>
        	</p>
       		<p class="roar">
        		 	<img src="/static/img/pic_077.jpg" alt="">
        		<span class="pan">￥7.8</span>
        	</p>
        	<p class="roar">
        		 	<img src="/static/img/pic_078.jpg" alt="">
        		 	<span class="pan">￥9.9</span>
        	</p>
        	<p class="roar">
        		 	<img src="/static/img/pic_079.jpg" alt="">
        		 <span class="pan">￥6.6</span>
        	</p>
        </div>
        <div class="hen"></div>
    </div>

</template>
<script>
export default {
  props:['title','id','desc','star',"img"]
}
</script>
<style>
.chunk{
	overflow: hidden;
	height: 300px;
	width: 100%;
}
.chunk .TuHua{
	float: left;
	height: 65px;
	width: 65px;
	border: 1px solid #f3f3f3;
	margin-top: 20px;
	margin-left: 10px;
}
.chuntu{
	float: left;
}
.chuntu a{
	outline-style: none;
	text-decoration: none;

}
.po{
	width: 100%;
	clear: both;
	float: left;
}
.ro{
	clear: both;
	float: left;
	margin-top: 10px;
	margin-left:87px ;
}
.roar{

	float: left;
}
.roar img{
	float: left;
	height:60px;
	width: 60px;
	border: 1px solid #f3f3f3;
	margin-left:10px;
}
.roar .pan{
	clear: both;
	float: left;
	font-size: 12px;	
	color: red;
	height: 20px;
	width: 60px;
	line-height: 20px;
	text-align: center;
	margin-left: 10px;
}
.title{
	margin-top: 18px;
  margin-left: 10px;
	font-size: 20px;
	font-weight: bold;
}
a{
	outline-style: none;
	text-decoration: none;
	color: #454545;
}
.dada{
	margin-top: 10px;
	margin-left: 10px;
	height: 18px;
	width: 100px;
	font-size: 12px;
	border-radius: 4px;
	border:2px solid #30b3ff ;
	color: #30b3ff;
	line-height: 18px;
	text-align: center;
	font-weight: bold;
}
.star{
	margin-top: 10px;
	margin-left: 10px;
	color: #ffa351;
}
.star .an{
	color: #bebebe;
}
.biao{
		margin-top: 10px;
		margin-left: 10px;
		color: #bebebe;
}
.state{
	margin-top: 10px;
	margin-left:87px ;
}
.states{
	margin-top: 10px;
	margin-left:87px ;
}
.ling{
	float: left;
	height: 15px;
	width: 30px;
	background: #ff9485;
	color: #ffff;
	border-radius: 2px;
}
.hil{
	float: left;
	margin-left:5px;
	color: #bebebe;
}
.man{
	clear: both;
	float: left;
	height: 15px;
	width: 30px;
	background: #78c77d;
	color: #ffff;
	border-radius: 2px;
}
.hill{
	float: left;
	margin-left:5px;
	color: #bebebe;
}
.hen{
	height: 2px;
	width: 100%;
	background: #f4f4f4;
}
.yu{
	clear: both;
	float: right;
	height: 2px;
	width: 80%;
	background: #f4f4f4;
}
</style>
