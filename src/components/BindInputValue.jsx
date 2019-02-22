import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default class BindInputValue extends React.Component{

    constructor(){
        super();
        //私有数据
        this.state = {
            msg: '哈哈'
        }
    }

    render(){
        return <div>
            <button className="btn btn-primary" onClick={() => this.show() }>按钮</button>

            <h3>{this.state.msg}</h3>

            <input type="text" style={{width: '100%'}} value={this.state.msg}
                   onChange={() => this.textChanged()} ref="mytxt"/>
        </div>
    }

    show = () => {
        //在setState中,只会把对应的state值更新,其余的不会覆盖
        this.setState({
            msg: '123'
        }, function () {
            console.log('1' + this.state.msg)
        });

        //this.setStete方法的执行是异步的,也就是说这里可能是'哈哈'旧值
        //如果需要在调用完成之后,立即拿到最新的state值,需要使用this.setState({}, callback)
        console.log('2' + this.state.msg)
    };

    textChanged = () => {
        this.setState({
            msg: this.refs.mytxt.value
        })
    }
}