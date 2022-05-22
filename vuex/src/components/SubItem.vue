<template>
  <div>
    <h3>SubItem组件</h3>
    <p>已知库存数：{{ count }}</p>
    <button @click="subFn">库存-1</button>
  </div>
</template>

<script>
//辅助函数映射
// 1.从vuex包里导出辅助函数
import { mapState,mapMutations,mapActions } from 'vuex'
// 2.调用辅助函数，传入要映射过来的state状态变量名'
export default {
  name: "SubItem",
  computed:{
      ...mapState(['count'])
  },
  methods:{
      ...mapMutations(['subCount']),
      ...mapActions(['asyncSubCount']),
      //等价于原地有了一个方法
      //subCount：function（）{}
      subFn(){
        //   this.subCount(1)
        this.asyncSubCount(1)
      }
  }
};
</script>

<style>
</style>