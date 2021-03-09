const path = require("path"); //node path  路径
const fs = require("fs"); // node  文件加载模块

module.exports = {
  mode: "development", //指定构建模式
  entry: "./src/index.js", //入口文件
  output: {
    //出口文件
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
