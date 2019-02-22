//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

import BindEvent from '@/components/BindEvent'

ReactDOM.render(<div><BindEvent/></div>, document.getElementById('app'));

