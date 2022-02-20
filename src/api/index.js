/*所有的API接口统一管理*/
import requests from "@/api/request";
import * as url from "url";

/*三级联动*/
// get /api 无参数

export const reqCategoryList = () => {
    // 发请求,返回的结果事Promise对象
    return requests({
        url: "/product/getBaseCategoryList",
        method: "get"
    })
}
