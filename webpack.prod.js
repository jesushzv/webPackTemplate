const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");;
const TerserPlugin = require("terser-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  module: {

      rules:[
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
      ],
  },
  optimization:{
    minimizer:[
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace:true,
        removeComments:true
      }
    })


  ],
});
