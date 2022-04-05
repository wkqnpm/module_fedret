/*
 * @Descripttion: 
 * @version: 
 * @Author: wkq
 * @Date: 2022-04-05 15:56:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-05 17:36:19
 */
const HtmlWebpackPlugin=require("html-webpack-plugin")
const {ModuleFederationPlugin}=require("webpack").container
module.exports={
    entry:"./src/index.js",
    mode:"production",
    plugins:[
        new HtmlWebpackPlugin(),
        new ModuleFederationPlugin({
            name:"search",
            filename:"remoteEntry.js",
            exposes:{
                "./search":"./src/Search.js"
            }
        })
    ]
  
}