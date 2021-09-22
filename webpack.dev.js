const common = require('./webpack.common')
const {merge} = require('webpack-merge')
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: "development",
    output:{
        filename: "[name].bundle.js",
    },
    
    plugins: [new htmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
      }),],
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
        ]
    }
});