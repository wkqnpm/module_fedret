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
