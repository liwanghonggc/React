//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM元素
// 参数1: 创建的元素的类型,字符串,表示元素的名称
// 参数2: 是一个对象或 null, 表示 当前这个 DOM 元素的属性
// 参数3: 子节点(包括 其它 虚拟DOM 获取 文本子节点)
// 参数n: 其它子节点
// <h1 id="myh1" title="this is a h1">这是一个大大的H1</h1>
// const myh1 = React.createElement('h1', null, '这是一个大大的H1')
//const myH1 = React.createElement('h1', {id: 'myh1', title: 'this is a h1'}, '这是一个小小的H1');

//const myDiv = React.createElement('div', null, '这是一个div元素', myH1);
// 注意: 在JS文件中,默认不能写这种类似于 HTML的标记,否则打包会失败
// 可以使用babel来转换这些JS中的标签
// 大家注意:这种在JS中,混合写入类似于HTML的语法,叫做JSX语法,符合XML规范的JS
// 注意:JSX语法的本质,还是在运行的时候,被转换成了React.createElement形式来执行的
const myDiv = <div id="mydiv" title="div aaa">
                这是一个div元素,哈哈
                <h1>这是一个大大的H1</h1>
              </div>;


// 3. 使用ReactDOM把虚拟DOM渲染到页面上
// 参数1: 要渲染的那个虚拟DOM元素
// 参数2: 指定页面上的DOM元素,当作容器 
ReactDOM.render(myDiv, document.getElementById('app'));