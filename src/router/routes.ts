import { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('/src/router/modules/*.ts')
const all = await Promise.all(Object.entries(modules).map(async ([key, loader]: [key: string, loader: () => Promise<any>]) => {
    return (await loader()).default
}))

const mainRoutes: RouteRecordRaw[] = [
    ...all,
    {
        name: 'profile',
        path: '/profile',
        component: () => import('@/views/profile.vue'),
        meta: {
            title: 'Profile',
            requiresAuth: true
        }
    },
    {
        name: 'posts',
        path: '/posts/:type',
        component: () => import('@/views/Posts/posts.vue'),
        meta: {
            title: 'Posts',
            requiresAuth: true
        }
    },
    {
        name: 'new',
        path: '/new/:type',
        component: () => import('@/views/Posts/new.vue'),
        meta: {
            title: 'New',
            requiresAuth: true
        }
    },
    {
        name: 'edit',
        path: '/edit/:type/:slug?',
        component: () => import('@/views/edit.vue'),
        meta: {
            title: 'Edit',
            requiresAuth: true
        }
    },
    {
        name: 'media',
        path: '/media',
        component: () => import('@/views/Media/media.vue'),
        meta: {
            title: 'Media',
            requiresAuth: true
        }
    },
    {
        name: 'upload',
        path: '/upload',
        component: () => import('@/views/Media/upload.vue'),
        meta: {
            title: 'Upload',
            requiresAuth: true
        }
    },
    {
        name: 'terms',
        path: '/terms/:type',
        component: () => import('@/views/Posts/terms.vue'),
        meta: {
            title: 'Terms',
            requiresAuth: true
        }
    },
    {
        name: 'users',
        path: '/users/:page?',
        component: () => import('@/views/Users/users.vue'),
        meta: {
            title: 'Users',
            requiresAuth: true
        }
    },
    {
        name: 'roles',
        path: '/roles',
        component: () => import('@/views/Users/roles.vue'),
        meta: {
            title: 'Roles',
            requiresAuth: true
        }
    },
    {
        name: 'permissions',
        path: '/permissions',
        component: () => import('@/views/Users/permissions.vue'),
        meta: {
            title: 'Permissions',
            requiresAuth: true
        }
    },
    {
        name: 'comments',
        path: '/comments',
        component: () => import('@/views/Comments/comments.vue'),
        meta: {
            title: 'Comments',
            requiresAuth: true
        }
    },
    {
        name: 'themes',
        path: '/themes',
        component: () => import('@/views/Themes/themes.vue'),
        meta: {
            title: 'Themes',
            requiresAuth: true
        }
    },
    {
        name: 'customize',
        path: '/customize',
        component: () => import('@/views/Themes/customize.vue'),
        meta: {
            title: 'Customize',
            requiresAuth: true
        }
    },
    {
        name: 'widgets',
        path: '/widgets',
        component: () => import('@/views/Themes/widgets.vue'),
        meta: {
            title: 'Widgets',
            requiresAuth: true
        }
    },
    {
        name: 'navigation',
        path: '/navigation',
        component: () => import('@/views/Themes/navigation.vue'),
        meta: {
            title: 'Navigation',
            requiresAuth: true
        }
    },
    {
        name: 'plugins',
        path: '/plugins',
        component: () => import('@/views/Plugins/plugins.vue'),
        meta: {
            title: 'Plugins',
            requiresAuth: true
        }
    },
    {
        name: 'install',
        path: '/install/:type',
        component: () => import('@/views/Plugins/install.vue'),
        meta: {
            title: 'Install',
            requiresAuth: true
        }
    },
    {
        name: 'tools',
        path: '/tools',
        component: () => import('@/views/Tools/tools.vue'),
        meta: {
            title: 'Tools',
            requiresAuth: true
        }
    },
    {
        name: 'import',
        path: '/import',
        component: () => import('@/views/Tools/import.vue'),
        meta: {
            title: 'Import',
            requiresAuth: true
        }
    },
    {
        name: 'export',
        path: '/export',
        component: () => import('@/views/Tools/export.vue'),
        meta: {
            title: 'Export',
            requiresAuth: true
        }
    },
    {
        name: 'card-drag',
        path: '/card-drag',
        component: () => import('@/views/Drag/card-drag.vue'),
        meta: {
            title: 'card-drag',
            requiresAuth: true
        }
    },
    {
        name: 'icon-drag',
        path: '/icon-drag',
        component: () => import('@/views/Drag/icon-drag.vue'),
        meta: {
            title: 'card-drag',
            requiresAuth: true
        }
    },
    {
        name: 'options',
        path: '/options/:type',
        component: () => import('@/views/Settings/options.vue'),
        meta: {
            title: 'Options',
            requiresAuth: true
        }
    },
    {
        name: 'BaiduMap',
        path: '/baidu-map',
        component: () => import('@/views/Map/BaiduMap.vue'),
        meta: {
            title: '百度地图',
            requiresAuth: true
        }
    },
    {
        name: 'TencentMap',
        path: '/tencent-map',
        component: () => import('@/views/Map/TencentMap.vue'),
        meta: {
            title: '腾讯地图',
            requiresAuth: true
        }
    },
    {
        name: 'MapBox',
        path: '/mapbox',
        component: () => import('@/views/Map/Mapbox.vue'),
        meta: {
            title: 'Mapbox',
            requiresAuth: true
        }
    }
]

const labsRoutes: RouteRecordRaw[] = [
    {
        name: 'labs',
        path: '/labs',
        component: () => import('@/views/Labs/labs.vue'),
        meta: {
            title: 'Labs'
        }
    }
]

const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/login',
        component: () => import('@/views/internal/login.vue'),
        meta: {
            title: 'Sign In'
        }
    },
    {
        name: 'layout',
        path: '/',
        component: () => import('../layouts/index.vue'),
        children: [...mainRoutes, ...labsRoutes]
    },
    // ## not found page
    {
        name: 'not-found',
        path: '/:path*',
        component: () => import('@/views/internal/error.vue'),
        meta: {
            title: 'Oh no!'
        }
    }
]

export default routes
