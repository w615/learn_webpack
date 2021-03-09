const path = require("path"); //node path  路径
const fs = require("fs"); // node  文件加载模块

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", //指定构建模式
  entry: "./src/index.js", //入口文件
  output: {
    //出口文件
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    // 因为修改hostname 导致不能正常启动 添加如下可以
    disableHostCheck: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 这里是根据这个src目录下的index.html模板创建样式
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  // 加载模块
  module: {
    // file-loader
    rules: [
      // {
      //   test: /\.jpg$/,
      //   use: {
      //     loader: "file-loader",
      //     // 其他配置项
      //     options: {
      //       name: "[name]_[hash].[ext]", //输出图片的名字
      //       outputPath: "images", //文件打包位置
      //     },
      //   },
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: "204800", // 设置文件大小超过这个值的转为base64 否则打包成图片
          },
        },
      },
      {},
    ],
  },
};
