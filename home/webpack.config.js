/*
 * @Descripttion: 
 * @version: 
 * @Author: wkq
 * @Date: 2022-04-05 15:56:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-05 17:31:33
 */
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {ModuleFederationPlugin}=require("webpack").container
module.exports={
    entry:"./src/index.js",
    mode:"production",
    devtool:"inline-source-map",
    plugins:[
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name:"home",
            filename:"remoteEntry.js",
            remotes:{ //使用其他服务
                nav:"nav@http://localhost:3003/remoteEntry.js", //引入的模块  
                /*
                格式：
                key：  对应服务下ModuleFederationPlugin的item.name
                value: 对应服务下ModuleFederationPlugin的item.name + url(item运行的地址) + item.filename
                */
               search:"search@http://localhost:3002/remoteEntry.js"
            },
            exposes:{
                "./Home":"./src/Home.js" //对外暴露的模块
            },
            shared:{},//定义一些共享的模块n
        })
    ],
    performance:{
        hints:false,  //关闭build 后文件超出一定大小的报错
    }
}