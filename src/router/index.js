import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';

const router = createRouter({
    linkExactActiveClass : 'active',
    history: createWebHistory(),
    routes: [
        {path:'/',  name: 'home', component: HomePage},
        {path:'/contact',  name: 'contact', component: ContactPage},
        {path:'/projects/:id',  name: 'project-details', component: ProjectDetails},
    ]
});

export { router };
