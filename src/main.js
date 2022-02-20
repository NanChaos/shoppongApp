import Vue from 'vue';
import App from './App.vue';
import router from '@/router';

// 三级联动组件
import TypeNav from "@/pages/Home/TypeNav";
// 引入仓库
import store from "@/store";
// 注册全局组件
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

//测试
import {reqCategoryList} from "@/api";

reqCategoryList();

new Vue({
    render: h => h(App),
    /*注册路由信息，在这里写router的时候，组件身上都拥有$route以及$router属性*/
    router,
    //注册仓库,组件实例上会多一个$store
    store,
}).$mount('#app')
