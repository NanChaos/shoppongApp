import Vue from 'vue';
import App from './App.vue';
import router from '@/router';


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    /*注册路由信息，在这里写router的时候，组件身上都拥有$route以及$router属性*/
    router
}).$mount('#app')
