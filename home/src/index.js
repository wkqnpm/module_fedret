/*
 * @Descripttion: 
 * @version: 
 * @Author: wkq
 * @Date: 2022-04-05 15:54:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-05 17:36:52
 */
import Home from "./Home"
/*
  使用模块联邦（微服务）需要采用异步加载的方式  路径为  使用的微服务名称和使用的微服务exposes出的key
*/
//单个服务使用
// import("nav/Header").then(res=>{
//     const odiv=document.createElement("DIV")
//     odiv.appendChild(res.default())
// odiv.innerHTML+=Home()
// document.body.appendChild(odiv)
// })
//多个服务的使用
Promise.all([import("search/search"),import("nav/Header")]).then(([{ default:Search},{ default:Header}])=>{
    const odiv=document.createElement("DIV")
    odiv.appendChild(Header())
    odiv.appendChild(Search())
odiv.innerHTML+=Home()
document.body.appendChild(odiv)
}
)
