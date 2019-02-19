import React from 'react'

import CmtItem from '@/components/CmtItem2'

import cssobj from '@/css/cmtList.css'

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
            <h1 className={cssobj.title}>这是评论列表组件</h1>

            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>;
    }
}