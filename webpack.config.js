const path = require('path');
// 导入在内存中自动生成index页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin');

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    //源文件
    template: path.join(__dirname, './src/index.html'),
    //生成的内存中首页的名称
    filename: 'index.html'
});

module.exports = {
    mode: 'development',

    plugins: [
        htmlPlugin
    ],

    module: {
        rules: [
            //配置使用babel-loader解析jsx语法转成react格式的对象
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
};