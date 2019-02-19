import React from 'react'

//将评论抽为无状态组件
export default function CmtItem(props) {
    return <div>
        <h1>评论人: {props.user}</h1>
        <p>评论内容: {props.content}</p>
    </div>;
}