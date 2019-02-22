//1.导入包
//创建组件、虚拟DOM元素,管理生命周期
import React from 'react'
//把创建好的组件和虚拟DOM放到页面上展示的
import ReactDOM from 'react-dom'

import BindInputValue from '@/components/BindInputValue'

ReactDOM.render(<div><BindInputValue/></div>, document.getElementById('app'));

