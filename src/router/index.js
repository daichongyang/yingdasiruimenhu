import Vue from 'vue'
import Router from 'vue-router'
import index_nav from '@/components/index_nav'
import index from '@/components/index'
import parkEng from '@/components/parkEng'
import newsZixun from '@/components/newsZixun'
import aroundLive from '@/components/aroundLive'
import inforDetail from '@/components/inforDetail'
import transportationGuide from '@/components/transportationGuide'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index_nav',
        component: index_nav,
        children: [{
                path: '/',
                name: 'index',
                component: index,
            },
            {
                path: '/parkEng',
                name: 'parkEng',
                component: parkEng,
            },
            {
                path: '/newsZixun',
                name: 'newsZixun',
                component: newsZixun,
            },
            {
                path: '/aroundLive',
                name: 'aroundLive',
                component: aroundLive,
            },
            {
                path: '/inforDetail',
                name: 'inforDetail',
                component: inforDetail,
            },
            {
                path: '/transportationGuide',
                name: 'transportationGuide',
                component: transportationGuide,
            },
        ]
    }]
})