import Vue from 'vue';

import VueRouter from "vue-router";

Vue.use(VueRouter)

const login = () => import('views/login/Login')

const layout = () => import('views/layout/Layout')

const user = () => import('@/views/user/User')

const index = () => import('@/views/index/Index')

const roles = () => import('@/views/roles/Roles')
const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        name:"登录",
        path: '/login',
        component: login

    },
    {
        path: '/layout',
        component: layout,
        
        redirect:"/index",
        children:[
            {
                name:"首页",
                path:"/index",
                component:index
            },
            {
                name:"用户",
                path:"/users",
                component:user
            },
            {
                name:"角色列表",
                path:"/roles",
                component:roles
            }
        ]

    }
   
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router