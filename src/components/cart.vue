<template>
  <div>
    <div class="caidan"> 
        <a href="javascript:void 0;" class="a5w outcartcontent light show" carticon="" style="transform: translateY(0px);" showup=""><i class="a5x">2</i></a>
        <div class="a5y" pricearea="" style="transform: translateX(0px);"><div class="">￥9</div></div>
   <a class="a60 disabled" qujiesuan="" href="javascript:void 0;">差11元起送</a>
    </div>
    <div class="cart">
        <table border="1px" width="100%">
        <tr v-for="(item,index) in cart" :key="item.id">
          <td>{{item.title}}</td>
          <td>{{item.sprice}}</td>
          <td>
            <button @click="sub(item)">-</button>
            {{item.num}}
            <button @click="add(item)">+</button>
          </td>
          <td>小计</td>
        </tr>
      </table>
    </div>
  </div>
 
</template>

<script>
import store from 'storejs'
import $ from'jquery'
export default {
  props:["shopid","shopname"],

  data:function(){
    return{
      cart:[],
    }
  },
  watch:{
    cart:function(newval,oldval){
     var cart = store.get("cart");
     cart[this.shopid] = {
      shopid:this.shopid,
      shopname:this.shopname,
      cart:this.cart
     }
      store.set("cart",cart);
    }
  },
  methods:{
    add(item){
      for(var i = 0;i<this.cart.length;i++){
        if(item.id==this.cart[i].id){
          if(this.cart[i].num<item.store){
            this.cart[i].num++;
            this.cart.splice(i,1,this.cart[i]);
         
          var nums={};
          nums[item.id] = this.cart[i].num;
          this.$root.bus.$emit("nums",nums);
           }
        }
      }
    }, 
    sub(item){
      for(var i=0;i<this.cart.length;i++){
        if(item.id == this.cart[i].id){
          this.cart[i].num--;
          this.cart.splice(i,1,this.cart[i]);

          var nums = {};
          nums[item.id] = this.cart[i].num;
          this.$root.bus.$emit("nums",nums);

          if(this.cart[i].num == 0){
            this.cart.splice(i,1);
          }
          return;
        }
      }
    }
  },
  created:function(){
    var th=this;
    this.$root.bus.$on('addPct',function(data){
      for(var i=0;i<th.cart.length;i++){
        if(data.id == th.cart[i].id){
          if(th.cart[i].num<data.store){
            th.cart[i].num++;
            th.cart.splice(i,1,th.cart[i]);
            var nums={};
            nums[data.id] = th.cart[i].num;
            th.$root.bus.$emit("nums",nums);
          }
          return;
        }
      }
      data.num=1;
      th.cart=th.cart.concat(data);
      // 广播添加商品数量的事件
      var nums={};
      nums[data.id] = data.num;
      th.$root.bus.$emit("nums",nums);
    });
    this.$root.bus.$on('subPct',function(data){
      for(var i=0; i<th.cart.length;i++){
        if(data.id == th.cart[i].id){
          if(th.cart[i].num>=1){
            th.cart[i].num--;
            th.cart.splice(i,1,th.cart[i]);
          }
          // 广播添加商品数量的事件
          var nums={};
          nums[data.id]=th.cart[i].num;
          th.$root.bus.$emit("nums",nums);


            if(th.cart[i].num==0){
              th.cart.splice(i,1);
            }
            return;
        }
      }

    });
  },
}
</script>


<style>
 .cart{
  /*display: none;*/
  position: fixed;
  left: 0;
  bottom:0px;
  width: 100%;
  border: 1px solid red;
  background:white;
  border-top: 1px solid #d9d9d9;
}
.caidan{
  position: fixed;
  bottom: 0px;
  z-index: 1;
  height: 50px;
  width: 100%;
  background: #f4f4f4;
}
a {
    text-decoration: none;
    -webkit-user-select: none;
    color: #555;
}
.a5w.show {
    visibility: visible;
}
.a5w.light {
    top: -13px;
    height: 58px;
    background-position: 10px -70px;
    background-size: 50px 125px;
}
.a5w{

    visibility: hidden;
    position: absolute;
    z-index: 50;
    left: 0;
    top: 0;
    width: 80px;
    height: 48px;
    background: url('/static/img/cart.png') 10px 5px no-repeat;
    background-size: 50px 125px;
    transition: transform .5s ease-out 0s;
    -webkit-transition: -webkit-transform .5s ease-out 0s;
}
.a5x {
    position: absolute;
    top: 5px;
    left: 44px;
    padding: 0 5px;
    height: 15px;
    line-height: 15px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background-color: #ff5d5c;
    border-radius: 7px;
    font-size: 10px;
  }
  .a5y {
    position: absolute;
    z-index: 40;
    left: 70px;
    bottom: 0;
    line-height: 48px;
    font-size: 18px;
    color: #ff3434;
    transition: transform .4s ease-out 0s;
    -webkit-transition: -webkit-transform .4s ease-out 0s;
}

.a60.disabled, .a60.sending {
    background-color: #bebebe;
}
.a60 {
    position: absolute;
    z-index: 40;
    right: 0;
    width: 115px;
    text-align: center;
    color: #fff;
    line-height: 48px;
    background-color: #47b34f;
}
</style>
