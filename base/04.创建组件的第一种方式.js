//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
};

//第一种创建组件的方式
//使用构造函数来创建组件,如果要接收外界传递的数据,需要在构造函数的参数列表中使用props来接收,组件中的props永远都是只读的,不能被重新赋值
//必须要向外return一个合法的JSX创建的虚拟DOM
//组件的名称首字母必须是大写
//父组件向子组件传递数据,使用{...obj}属性扩散传递数据
function Hello(props){
    return <div>这是Hello组件,{props.name} {props.age} {props.gender}</div>
}

//...dog,这是ES6的一个语法特性
ReactDOM.render(<div><Hello {...dog}></Hello></div>, document.getElementById('app'));