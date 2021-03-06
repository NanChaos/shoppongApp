import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//引入小仓库
import home from "@/store/home";
import search from "@/store/search";

// 对外暴露store实例
export default new Vuex.Store({
    // 实现Vuex模块式开发
    modules: {
        home, search
    }
})