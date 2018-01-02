<template>
    <div>   
    
      <div id="ShowDiv">
        <img src="/static/img/11.png" alt="">
        <p class="p1">沃尔玛-新街口店</p> <i class="fa fa-heart-o"></i>
        <p class="p2">哒哒转送|53分钟</p>
        <p class="p3">基础运费6元</p>
       </div>
     

      <div class="bye">
        <div class="header">
          <div class="search">
           <i class="fa fa-search"></i><input class="put" type="text" placeholder="搜索附近商品和门店">
          </div>
        </div>
      </div>
       
      <div class="content row">
      <div class="col-xs-2">
        <div>
          <ctg-menu :ctgMenu="ctg" v-for="(ctg,index) in ctgMenus" :key="ctg.id" />
        </div>
      </div>
      <div class="col-xs-10">
        <div>
          <p-list :nums="nums" :plist="list" v-for="(list,index) in plists" :key="list.id" />
        </div>
      </div>  
    </div>


      <div class="footer">
        <cart :shopid="$route.params.shopid" :shopname="$route.params.shopname"></cart>
      </div>


    </div>
</template>
<script>
import ctgMenu from '@/components/ctg-menu'
import pList from '@/components/p-list'
import cart from '@/components/cart'
import $ from 'jquery'
import store from 'storejs'
if(!store.has('cart')){//保证cart不存在的时候初始化购物车
  store.set('cart',{});
}
var getCtgListsUrl = 'https://easy-mock.com/mock/5a2a34b788da413c1e610f67/daoji/menu-left'
export default {
  data: function() {
    return {
      ctgMenus: [],
      nums: {}

    }
  },
  computed: {
    plists: function() {
      return this.ctgMenus;  
    }
  },
  created: function() {
    var th = this;
    this.$root.bus.$on("nums",function(data){
     for(var i in data){
      th.$set(th.nums,i,data[i]);
      if(data[i]==0){
        delete th.nums[i];
      }
     }
    });
    var th = this;
    $.get(getCtgListsUrl, function(res) { 
      th.ctgMenus = th.ctgMenus.concat(res.data)
    }, 'json')
  },
  components: {
    "ctg-menu": ctgMenu,
    "p-list": pList,
    "cart":cart
  }
}
  // $(function(){
  //       $("#ShowDiv").click(
  //           function(){
  //                if($("#ShowButton").css("display")=='none'){
  //                   $("#ShowButton").slideDown();
  //                   $("#ShowButton").html("wefjwowonvjndsjvndjfvnjdn");
  //                   $("#ShowDiv").val("");
  //                }else{
  //                   $("#ShowButton").slideUp();
  //                   $("#ShowDiv").val("显示");
  //                }
  //           });
  //       });
</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: normal;
    font-style: normal;
}

#ShowDiv{
  color: #ffff;
  height:110px;
  width: 100%;
  background:url('/static/img/store_industry_4.jpg');

                           
}
img{
  float: left;
  height:55px;
  width: 55px;
  margin: 10px;
  border-radius: 4px;
  border: 0;
  vertical-align: auto;
}
.p1{
  font-size: 20px;
  font-family: "宋体";
  font-weight: bold;
  position: relative;
  top: 10px;
}
.p2{
  margin-top: 10px;
  font-size: 12px;
}
.p3{
  font-size: 12px;
}
.fa-heart-o{
  font-size: 20px;
  float: right;
  position: relative;
  top: -20px;
  right: 10px;
}
.bye{
  background: #eaeaea;
  border: 1px solid #eaeaea;
}
.header{
  height: 34px;
  width: 90%;
  margin: 10px auto;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  padding: 0 5px 0 20px;
  background: #ffff;
}
.search{
  color: #e7e7e7;
}
.fa-search{
  margin: 5px;
  font-size: 15px;
}
.put{
  height: 30px;
  font-size: 15px;
  border: none;
  width: 70%;
  outline: none;
  text-decoration: none;
}


</style>


