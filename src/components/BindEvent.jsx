import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'

export default class BindEvent extends React.Component{

    constructor(){
        super();
        //私有数据
        this.state = {}
    }

    render(){
        return <div>
            BindEvent组件
            <hr/>

            {/*<button className="btn btn-primary" onClick={this.myClickHandler}>按钮</button>*/}


            {<button className="btn btn-primary" onClick={
                () => this.myClickHandler('lwh')
            }>按钮</button>}
        </div>
    }

    //实例方法
    myClickHandler = (arg) => {
        console.log('李旺红' + arg)
    }
}