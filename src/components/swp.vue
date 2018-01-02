<template>
	<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/static/img/pic_055.jpg" alt=""></div>
        <div class="swiper-slide"><img src="/static/img/pic_056.jpg" alt=""></div>
        <div class="swiper-slide"><img src="/static/img/pic_057.jpg" alt=""></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
     -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
</template>

<script>
import'../../node_modules/swiper/dist/css/swiper.min.css';
import Swiper from 'swiper';
export default {
	mounted:function(){
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })        
	}
}
</script>

<style lang="css" scoped>
.swiper-container {
    width: 100%;
    height: 300px;
}  
.swiper-slide img{
	width: 100%;
    height: 100%;
}
</style>