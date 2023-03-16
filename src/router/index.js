import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';

const router = createRouter({
    linkExactActiveClass : 'active',
    history: createWebHistory(),
    routes: [
        {path:'/',  name: 'home', component: HomePage},
        {path:'/contact',  name: 'contact', component: ContactPage},
        {path:'/projects/:id',  name: 'project-details', component: ProjectDetails},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage }
    ]
});

export { router };
