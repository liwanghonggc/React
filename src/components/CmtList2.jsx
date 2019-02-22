import React from 'react'

import CmtItem from '@/components/CmtItem2'

import cssobj from '@/css/cmtList.scss'

//如果在引用某个包的时候,它已经被安装到了node_modules目录中,
//则可以省略node_modules目录,直接以包名引入模块或样式表
import 'bootstrap/dist/css/bootstrap.css'

export default class CmtList extends React.Component{
    constructor(){
        super();

        this.state = {
            //实际中,CommentList数据可以是Ajax获取到的
            CommentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈，楼下山炮' }
            ]
        };
    }

    render(){
        return <div>
            {/* 在行内样式中,如果是数值类型的样式,则可以不用引号包裹.如果是字符串类型的样式值,必须使用引号包裹*/}
            {/*<h1 className={cssobj.title + ' test'}>这是评论列表组件</h1>*/}
            <h1 className={[cssobj.title, 'test'].join(' ')}>这是评论列表组件</h1>

            <button className="btn btn-primary">按钮</button>

            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>;
    }
}