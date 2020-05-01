import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/games',
        name: 'Games',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/games/index.vue')
    },
    {
        path: '/rent-pc',
        name: 'Rent PC',
        component: Home
    },
    {
        path: '/support',
        name: 'Support',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: Home
    },
    {
        path: '/sign-up',
        name: 'Sign up',
        component: Home
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
