// src/router/index.js
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import routes from './routes';


const router = createRouter({
    // history: createWebHistory(),
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),  // for Vite-SSG
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition

        const scroller = document.querySelector('.v-application__wrap');
        if (scroller) {
            scroller.scrollTo({
                top:0, left: 0, behavior: 'auto'
            });
        }
        return false;
    }
});

export default router;


