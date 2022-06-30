import {createWebHistory, createRouter} from "vue-router";
import {ref, onMounted} from 'vue'

import Home from "@/components/Home.vue";

//Auth
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Account from "@/components/Account.vue";
import Dashboard from "@/components/Dashboard.vue";

//Products
import MangaById from "@/components/MangaById.vue";
import AddMangaOrAnime from "@/components/AddMangaOrAnime.vue";
import AnimesList from "@/components/AnimesList.vue";
import MangasList from "@/components/MangasList.vue";
import AnimeById from "@/components/AnimeById.vue";


const storeToken = ref("")

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
            path: "/animes",
            name: 'anime',
            component: AnimesList,
        },
        {
            path: "/manga",
            name: 'manga',
            component: MangasList,
        },
        {
            path: "/mangas/:id",
            name: 'mangaById',
            component: MangaById,
        },
        {
            path: "/add-manga-or-anime",
            name: 'addMangaOrAnime',
            component: AddMangaOrAnime,
        },
        {
            path: "/animes/:id",
            name: 'animeById',
            component: AnimeById,
        },
       
    ]
})


// ici on gère les accès aux routes

router.beforeEach((to,from,next) => {
    const isConnected = localStorage.getItem('token') === null ? false : true
    const routeNeedLogin =["account","dashboard"]
    const routeOnlyAdmin = ["dashboard"]
    const routeOnlyMember = ["account"]
    if(isConnected)
    {
        
        storeToken.value = JSON.parse(localStorage.getItem('token'))
        console.log(storeToken.value)
        const adminVerify = storeToken.value.user.isAdmin
        console.log("tetetetete",adminVerify)
        if(adminVerify === false && routeOnlyAdmin.includes(to.name)) next({name: 'account'});
        if(adminVerify === true && routeOnlyMember.includes(to.name)) next({name: 'dashboard'});
    }
    if (routeNeedLogin.includes(to.name) && !isConnected) next({name: 'login'})
    next()
}) 

export default router;