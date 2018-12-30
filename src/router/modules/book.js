import layoutHeaderAside from '@/layout/header-aside'

export default {
    path:'/book',
    name:"图书管理",
    redirect:{name: 'book-book-info'},
    component: layoutHeaderAside,
    children:(pre => [
        {
            path:"bookInfo",
            name:`${pre}book-info`,
            meta: {requiresAuth: true, title: '图书信息'},
            component: () => import('@/pages/book-info')
        },
        {
            path:'addBook',
            name:`${pre}add-book`,
            meta: {requiresAuth: true, title: '添加图书'},
            component: () => import('@/pages/add-book')
        },
        {
            path:'bookDetail',
            name:`${pre}book-detail`,
            meta: {requiresAuth: true, title: '图书详情'},
            component: () => import('@/pages/book-detail')
        },
        {
            path:'editBook',
            name:`${pre}edit-book`,
            meta: {requiresAuth: true, title: '图书详情'},
            component: () => import('@/pages/edit-book')
        }
    ])('book-')
}
