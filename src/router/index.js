import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/sign-in',
        name: 'Sign in',
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: '/sign-out',
        name: 'Sign out',
        component: () =>
            import ('../views/SignOut.vue')
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
            import ('../views/Workflow.vue')
    },
    {
        path: '/workflow-list',
        name: 'Workflow-list',
        component: () =>
            import ('../views/WorkflowList.vue')
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
        path: '/contracts',
        name: 'Contracts',
        component: () =>
            import ('../views/Contracts.vue')
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: () =>
            import ('../views/Inbox.vue')
    },
    {
        path: '/to-do',
        name: 'To-Do',
        component: () =>
            import ('../views/To-Do.vue')
    },
    {
        path: '/reports',
        name: 'Reports',
        component: () =>
            import ('../views/Reports.vue')
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
    },
    {
        path: '/components',
        name: 'Components',
        component: () =>
            import ('../views/Components.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router