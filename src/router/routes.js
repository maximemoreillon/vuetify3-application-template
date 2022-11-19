import MainLayout from '@/components/MainLayout.vue';

// Template views
import LoginView from '@/views/LoginView.vue';

import appRoutes from './appRoutes'

const routes = [
    {
        path: '/',
        component: MainLayout,

        // These would be the actual routes used by the app
        children: appRoutes,
    },

    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },

    // {
    //     path: '/:catchAll(.*)*',
    //     component: () => import('pages/ErrorNotFound.vue'),
    // },
]


export default routes