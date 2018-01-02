<template>

<a href="">
    <img :src="csrc" alt="">
    <p>{{text}}</p>
</a>  
</template>
<script>

export default {
      props: ['csrc', 'text'],//接受参数
 
}
</script>

<style>
a .img {
  width: 100%;
}
</style>

