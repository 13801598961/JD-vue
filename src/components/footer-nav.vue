<template>
  <div class="hong">
      <router-link :to="url">
      	<div class="pl">
      		<p class="te">{{text}}</p>
          <p class="lee"><span :class="icon"></span></p>
      	</div>
          
      </router-link>
  </div>
</template>

<script>
export default {
    props:['text','icon','url']
}
</script>

<style>
.hong{
	height: 50px;
	width: 100%;
}
.te{
	margin-top: 5px;
}
.lee{
	font-size: 18px;
	margin-top: -10px;
}
.pl{
	text-align: center;
	border: 1px solid #f4f4f4;
	font-size: 15px;
	color: #848484;
}
</style>
