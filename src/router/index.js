import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import about from '@/views/about'
import team from '@/views/team'
import portfolio from '@/views/portfolio'
import news from '@/views/news'

import contact from '@/views/contact'
import names from '@/views/names'

// 测试模块
import demo from '@/views/demo'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'about',
        component: about
    }, {
        path: '/about',
        name: 'about',
        component: about
    }, {
        path: '/team',
        name: 'team',
        component: team
    }, {
        path: "/portfolio",
        name: "portfolio",
        component: portfolio
    }, {
        path: "/news",
        name: "news",
        component: news
    }, {
        path: "/contact",
        name: "contact",
        component: contact
    }, {
        path: "/names",
        name: "names",
        component: names
    }, {
        path: "/demo",
        name: "demo",
        component: demo
    }]
})