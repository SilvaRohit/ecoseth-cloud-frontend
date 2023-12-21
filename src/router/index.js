import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: () => import('@/views/Home/HomeView.vue')
        // },
        {
            path: '/',
            name: 'stake',
            component: () => import('@/views/Stake/StakeView.vue')
        },
        {
            path: '/pool',
            name: 'pool',
            component: () => import('@/views/Stake/PoolView.vue')
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: () => import('@/views/Stake/WalletView.vue')
        },
        {
            path: '/asset',
            name: 'asset',
            component: () => import('@/views/Stake/AssetView.vue')
        }
    ]
})

export default router
