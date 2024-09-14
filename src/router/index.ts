import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import About from '@/views/About.vue';
import Login from '@/views/pages/auth/login.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/defaultLayout',
            component: DefaultLayout,
            children: [
                { path: '/home', component: Home },
                { path: '/about', component: About }
            ]
        }
    ]
});

export default router;
