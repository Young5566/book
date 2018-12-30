import layoutHeaderAside from '@/layout/header-aside'

export default {
    path:'/librarian',
    name:"图书管理",
    redirect:{name: 'librarian-librarian-info'},
    component: layoutHeaderAside,
    children:(pre => [
        {
            path:"personal",
            name:`${pre}librarian-info`,
            meta: {requiresAuth: true, title: '个人中心'},
            component: () => import('@/pages/librarian-info')
        }
    ])('librarian-')
}
