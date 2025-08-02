import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./components/Welcome.vue";
import Films from "./components/Films.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Welcome },

        { path: '/films', component: Films },
    ]
})