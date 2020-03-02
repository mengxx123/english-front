import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Card = resolve => require(['@/views/Card'], resolve)
const PhoneticAlphabet = resolve => require(['@/views/PhoneticAlphabet'], resolve)
const MemorizeWord = resolve => require(['@/views/MemorizeWord'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/card',
        component: Card
    },
    {
        path: '/phonetic_alphabet',
        component: PhoneticAlphabet
    },
    {
        path: '/memorize_word',
        component: MemorizeWord
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
