// 插件
import demoPlugins from './modules/demo-plugins'
// 组件
import demoComponents from './modules/demo-components'
// 组件
import demoCharts from './modules/demo-charts'
// 组件库
import demoElement from './modules/demo-element'
// 组件库
import demoFilters from './modules/demo-filters'
// 试验台
import demoPlayground from './modules/demo-playground'
// 示例
import demoBusiness from './modules/demo-business'
// CRUD
import demoD2Crud from './modules/demo-d2-crud'
// 第三方网页
import demoFrame from './modules/demo-frame'

import book from './modules/book'

// 菜单 侧边栏
export const menuAside = [
    book
]

// 菜单 顶栏
export const menuHeader = [
    {
        path: '/index',
        title: '首页',
        icon: 'home'
    },
    {
        title: '图书管理',
        icon: 'puzzle-piece',
        children: [
            {
                path: "/book/addBook",
                title:"添加图书",
                icon: 'book'
            },
            {
                path: "/book/bookInfo",
                title:"图书信息",
                icon: 'book'
            },
        ]
    }
]
