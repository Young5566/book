export default {
    path: '/book',
    title: '图书管理',
    icon: 'globe',
    children: (pre => [
        { path: `${pre}addBook`, title: '添加图书', icon: 'book' },
        { path: `${pre}bookInfo`, title: '图书信息', icon: 'book' },
        // {
        //     path: `${pre}mock`,
        //     title: '模拟数据',
        //     icon: 'globe',
        //     children: [
        //         { path: `${pre}mock/ajax`, title: '拦截异步请求' },
        //         { path: `${pre}mock/dpd`, title: 'DPD 规则' },
        //         { path: `${pre}mock/dtd`, title: 'DTD 规则' }
        //     ]
        // }
    ])('/book/')
}
