import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () =>
            import ('../views/Logout.vue')
    },
    {
        path: '/',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue')
    },
    {
        path: '/workflow',
        name: 'Workflow',
        component: () =>
            import ('../views/WorkflowList.vue')
    },
    {
        path: '/workflow-details',
        name: 'Workflow-details',
        component: () =>
            import ('../views/WorkflowDetails.vue')
    },
    {
        path: '/sites',
        name: 'Sites',
        component: () =>
            import ('../views/Sites.vue')
    },
    {
        path: '/analysis',
        name: 'Analysis',
        component: () =>
            import ('../views/Analysis.vue')
    },
    {
        path: '/generators',
        name: 'Generators',
        component: () =>
            import ('../views/Generators.vue')
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: () =>
            import ('../views/Inbox.vue')
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: () =>
            import ('../views/NotificationView.vue')
    },
    {
        path: '/support',
        name: 'Support',
        component: () =>
            import ('../views/Support.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () =>
            import ('../views/Profile.vue')
    },
    {
        path: '/company-profile',
        name: 'CompanyProfile',
        component: () =>
            import ('../views/CompanyProfile.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () =>
            import ('../views/Settings.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router