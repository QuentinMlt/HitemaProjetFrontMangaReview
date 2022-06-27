import {createWebHistory, createRouter} from "vue-router";

import Home from "@/components/Home.vue";

//Auth
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
import Account from "@/components/Account.vue";
import Dashboard from "@/components/Dashboard.vue";

//Products
import MangasList from "@/components/MangasList.vue";
import MangaById from "@/components/MangaById.vue";
import AnimesList from "@/components/AnimesList.vue";
import AnimeById from "@/components/AnimeById.vue";




// Création des differentes routes du projet

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: "/",
            name: 'home',
            component: Home,
        },
        {
            path: "/login",
            name: 'login',
            component: Login,
        },
        {
            path: "/register",
            name: 'register',
            component: Register,
        },
        {
            path: "/account",
            name: 'account',
            component: Account,
        },
        {
            path: "/dashboard",
            name: 'dashboard',
            component: Dashboard,
        },
        {
            path: "/mangas",
            name: 'manga',
            component: MangasList,
        },
        {
            path: "/animes",
            name: 'anime',
            component: AnimesList,
        },
        {
            path: "/mangas/:id",
            name: 'mangaById',
            component: MangaById,
        },
        {
            path: "/animes/:id",
            name: 'animeById',
            component: AnimeById,
        },
    ]
})

export default router;