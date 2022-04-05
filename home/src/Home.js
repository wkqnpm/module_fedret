/*
 * @Descripttion: 
 * @version: 
 * @Author: wkq
 * @Date: 2022-04-05 16:16:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-05 16:21:13
 */
const Home=()=>{
    let str="<ul>"
    for(let i=0;i<6;i++){
        str+=`<li>item${i}</li>`
    }
    return str+='</ul>'
}
export default Home