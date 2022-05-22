<template>
  <div id="app">
    <h1>根组件</h1>
    <span>库存总数：</span>
    <input type="text" v-model="num">
    <div style="boder:1px solid black;width:300px;">
       <AddItem></AddItem>
    </div>
     <hr>
     <div style="boder:1px solid black;width:300px">
       <SubItem></SubItem>
     </div>
  </div>
</template>

<script>
import AddItem from "@/components/AddItem";
import SubItem from "@/components/SubItem";
export default {
  // 小知识点：data函数执行时，才给this身上添加data函数return对象里属性
  // 所以在里面this.a或者this.b都是访问不到值的，没挂载就要访问时undefined
  // 不要在data函数里写this
   data(){
      return{
        
      }
    },
  components: {
    AddItem,
    SubItem,
  },
  computed:{
    num:{
      // set(val){},
      get(){
        return this.$store.state.count
      }
    }
  }
};
</script>

<style>
#app{
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 4px;
}
</style>