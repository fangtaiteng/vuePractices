<template>
  <div>
      <p>我的首页</p>
      <p>查看商品</p>
      <hr>
      <router-link to="/home/my-sport">我的体育</router-link>
      <router-link to="/home/your-sport">你的体育</router-link>
      <p>下面是二级路由</p>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>