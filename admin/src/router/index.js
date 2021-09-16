import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import CateEdit from '../views/CateEdit.vue';
import CateList from '../views/CateList.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            { path: '/cate/create', component: CateEdit },
            { path: '/cate/list', component: CateList },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
