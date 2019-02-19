//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

const attStr = ['李旺红', '严海斌', '许春杰', '刘泽城'];

//注意:React中,需要把key添加给被forEach或map或for循环直接控制的元素
const nameArr = [];
attStr.forEach(item => {
    const temp = <h2 key={item}>{item}</h2>;
    nameArr.push(temp);
});

//两种写法
//第一种写法
//第二种写法,map和forEach的区别是map有返回值
ReactDOM.render(<div>
                      {nameArr}
                      <hr/>
                      {attStr.map(item => {
                          return <h3 key={item}>{item}</h3>
                      })}
                </div>, document.getElementById('app'));