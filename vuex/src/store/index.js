import Vue from 'vue'
import Vuex from 'vuex'
// 注册 --给Vue实例原型上添加$store属性
Vue.use(Vuex)
// 定义规则和生成store对象
const store = new Vuex.Store({
    state:{ //定义变量
        count:100
    },

    //注意：mutations和actions只能接收一个参数（如果传递多个，需要传递一个完整的对象）
    mutations:{ //修改变量值（同步）（唯一能修改state的地方，原因：devtools工具查看变化过程）
        addCount(state,value){
            state.count += value;
        },
        subCount(state,value){
            state.count -= value;
        },
        setCount(state,value){
            state.count = value;
        }
    },
    actions:{   //修改变量值（异步）
        asyncAddCount(store){
            setTimeout(() => {
                store.commit('addCount',1)
            }, 2000);
        },
        asyncSubCount(store,value){
            setTimeout(() => {
                store.commit('subCount',value)
            }, 2000);
        }
    }
})

// 导出到main.js中注册到new Vue里
export default store