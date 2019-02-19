//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

const user = {
    name: '李旺红',
    age: 22,
    gender: '男'
};

class Movie extends React.Component {
    //构造器
    constructor(){
        super();

        //在class创建的组件中,this.state上的数据都是可读可写的
        this.state = {
            msg: '大家好,我是class的私有属性msg'
        };
    }

    //render函数的作用是渲染当前组件所对应的虚拟DOM元素并返回
    render(){
        //在class关键字创建的组件中,如果想使用外界传递过来的props参数,不需接收,直接通过this.props.***访问即可
        {/* 注意:在class组件内部,this表示当前组件的实例对象 */}
        //不论是class还是普通function创建的组件,它们的props都是只读的
        return <div>
                   这是Movie组件,{this.props.name},{this.props.age},{this.props.gender}
                   <hr/>
                   <h3>{this.state.msg}</h3>
              </div>;
    }
}

ReactDOM.render(<div><Movie {...user}></Movie></div>, document.getElementById('app'));

