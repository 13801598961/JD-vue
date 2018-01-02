<template>
  <div class="shuai">  
   
      <div class="kanfa"> 
      <div class="yu">
        <div class="loop"><div class="t1">4张优惠卷</div><div class="t2">9.0折,9.0折,7.5折,满36减6</div></div>
        <div class="achieve"><p class="t3">领卷</p></div>
      </div>
      <img src="/static/img/c3.jpg" alt="">
     </div>

    
    
    <div class="late">{{plist.text}}</div>
    <div class="hu">
      <div v-for="(submenu,index) in plist.children" :key="submenu.id">
        <div v-for="(p,index) in submenu.plists" :key="p.id" class="kuan"> 

          <img src="/static/img/pic_069.png" alt="">
      
             <div class="hengFu"><a href="" :id="submenu.id">{{submenu.text}}</a></div>
            <div class="big">{{p.title}}</div>
            <div class="sill">{{p.desc}}</div>
            <p class="kou">
              &yen;{{p.sprice}}
              <del> &yen;{{p.price}}</del>
            </p>
          <div class="log">
            <span v-if="nums[p.id]" class="try">
              <button @click="sub(p)" class="but1">-</button>
              <span>{{nums[p.id]}}</span> 
            </span>
           <button @click="add(p)" class="but2" >+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["plist","nums",],
  methods: {
    add: function(p) {
      this.$root.bus.$emit("addPct", p);
    },
     sub: function(p) {
      this.$root.bus.$emit("subPct", p);
    },

  }

}

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.ren{
  height: 80%;
  width: 100%;
  overflow: scroll;
}
.yu{
  height: 70px;
  width: 95%;
  margin:10px 5px 0px 10px;
}
.t1{
    margin-top: 10px;
    margin-left: 10px;
    color: #FF5757;
    font-size: 15px;
}
.t2{
  font-size: 11px;
  margin-left: 10px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
}
.t3{
  display: block;
  width: 50px;
  height: 20px;
  font-size: 13px;
  color: #fefffe;
  text-align: center;
  line-height: 20px;
  margin: 24px auto 0;
  background-color: #ff5757;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}
.loop{
  float: left;
  height: 70px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  width: 70%;
  border-radius: 0  15px 15px 0;
  border: 1px solid #ff9d9d;
  border-right: none;
  border-left: 3px solid #ff9d9d;
  border-right: 1px dashed #ff9d9d;
  background: #fffbfb;
}
.achieve{
  float: left;
  height: 70px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 26%;
  border-radius:15px 0 0 15px;
  border: 1px solid #ff9d9d;
  border-left: none;
  background: #fffbfb;
}
.kanfa img{
  height: 120px;
  width: 95%;
  margin:10px 5px 8px 10px;
}
.late{
  font-size: 20px;
  height:30px;
  width: 100%;
  background: #ececec;
  font-weight: bold;
  font-family: "宋体";
 
}
.chaTU img{
  height: 92px;
  width: 100%;
}
.kuan{
  height: 100%;
  width: 100%;
  border: 1px solid #f8f8f8;
  border-top: none;
  border-right: none;
  border-left: none;
}
.kuan img{
  float: left;
  margin: 22px;
  height: 55px;
  width: 55px;
}
.hengFu{
  margin-top: 10px;
font-size: 18px;
}
.hengFu a{
   text-decoration: none;
  font-weight: bold;
  color: black;
}
.big{
margin-top: 10px;
font-size: 15px;
}
.sill{
font-size: 12px;
 color: #999999;
}
.kou{
  margin-top: 10px;
  color: red;
}
del{
  margin-left: 10px;
  color:#999999 ;
}
.log{
 text-align: right;
 margin-right: 5px;

}
button{
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #eaeaea;
  background: #ffff;
  color:#47b34f;
  border-radius: 50%;
  text-decoration: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  margin: 10px;
}

</style>
