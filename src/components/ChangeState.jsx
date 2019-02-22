import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default class ChangeState extends React.Component{

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
        </div>
    }

    show = () => {
        this.setState({
            msg: '123'
        })
    }
}