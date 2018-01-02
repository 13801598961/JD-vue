<template>
	<div class="nian">
		<div @click="toggle" class="tog">{{ctgMenu.text}}
			<div v-show="display">
				<div v-for="(ctg,index) in ctgMenu.children" :key="ctg.id">
						<a :href="'#'+ctg.id">{{ctg.text}}</a>
				</div>
			</div>	
		</div> 
	
	</div>
		
</template>

<script>
export default {
	data:function(){
		return{
			display:false
		}
	},
	methods:{
		toggle:function(){
			this.display = !this.display; 
		}
	},
 props:['ctgMenu'],
}
</script>

<style lang="css" scoped>
*{
	margin: 0;
	padding: 0;
}

.tog{
	/*height: 100px;*/
	/*width: 20px;*/
font-size: 15px;
border: 1px solid #ADADADFF;
color: #8d8d8d;
background-color: #f4f4f4;
}
a{
	height:100%;
	width: 100%;
	color: #76c57c;
	border: 1px solid #ADADADFF;
}
</style>


 