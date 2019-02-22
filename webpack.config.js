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
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
            //为.css后缀名的样式表,启用CSS模块化,配置以后样式也有作用域了
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            //引入bootstrap之后,webpack无法处理字体图标,需要安装url-loader并配置这里
            {test: /\.ttf|woff|woff2|eot|svg$/, use: "url-loader"},
            //打包处理scss文件的loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] }
        ]
    },

    resolve: {
        //表示这几个文件的后缀名可以省略,如导入组件时若不配置这里,就需要写文件后缀名
        extensions: ['.js', '.jsx', '.json'],

        //配置@代表项目根目录的src目录,拼接完是一个绝对路径
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
};