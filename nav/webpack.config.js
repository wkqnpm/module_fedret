/*
 * @Descripttion: 
 * @version: 
 * @Author: wkq
 * @Date: 2022-04-05 15:56:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-05 16:48:17
 */
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {ModuleFederationPlugin}=require("webpack").container
module.exports={
    entry:"./src/index.js",
    mode:"production",
    plugins:[
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name:"nav",
            filename:"remoteEntry.js",
            remotes:{},//使用的远端的服务
            exposes:{
                "./Header":"./src/Header.js"
            },
            shared:{},//定义一些共享的模块n
        })
    ]
}