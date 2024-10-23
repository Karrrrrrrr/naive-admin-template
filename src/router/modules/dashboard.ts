import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
    name: 'home',
    path: '/dashboard',
    component: () => import('@/views/Dashboard/home.vue'),
    meta: {
        title: 'Home',
        requiresAuth: true
    },
    children: [
        {
            name: 'update',
            path: 'update',
            component: () => import('@/views/Dashboard/update.vue'),
            meta: {
                title: 'Update',
                requiresAuth: true,
                permissions: [],
            }
        },
        {
            name: 'about',
            path: 'about',
            component: () => import('@/views/internal/about.vue'),
            meta: {
                title: 'About',
                requiresAuth: true
            }
        },
    ]
}

export default routes
