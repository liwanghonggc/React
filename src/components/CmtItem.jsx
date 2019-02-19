import React from 'react'

import styles from '@/components/styles'

// const itemStyle = { border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' }
// const userStyle = { fontSize: '14px' }
// const contentStyle = { fontSize: '12px' }

//将评论抽为无状态组件
export default function CmtItem(props) {
    return <div style={styles.item}>
        <h1 style={styles.user}>评论人: {props.user}</h1>
        <p style={styles.content}>评论内容: {props.content}</p>
    </div>;
}