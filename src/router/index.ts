import {createRouter, createWebHistory, createWebHashHistory, createMemoryHistory} from 'vue-router'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
    // 指定路由的模式,此处使用的是hash模式
    history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    // history: createMemoryHistory(process.env.BASE_URL),//带缓存 history 路由
    // 路由地址
    routes: [{
        path: '/todolist',
        // 必须添加.vue后缀
        component: () => import('../views/TodoList.vue')
    }]
})
