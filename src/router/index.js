/*配置路由的地方*/
import Vue from 'vue';
import VueRouter from 'vue-router';

/*使用插件*/
Vue.use(VueRouter);

/*配置路由*/
//  引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// backup
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// override push|replace
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(
            this,
            location,
            resolve,
            reject
        )
    } else {
        originPush.call(
            this,
            location,
            () => {
            },
            () => {
            }
        )
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => {}, () => {})
    }
}

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {
                show: true
            }
        },
        {
            // ？设置params参数可穿可不传
            path: "/search/:keyword?",
            component: Search,
            meta: {
                show: true
            },
            name: "search"
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: false
            }
        },
        {
            path: "*",
            redirect: "/Home"
        }
    ]
})
