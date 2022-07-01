<script setup>
import {useUserStore} from "@/services/userstore";
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const userInfo = ref("")
const {disconnect} = useUserStore();

function clickDisconnect(){
  disconnect()
  router.push({name: "home"});
}


onMounted(() => {
const storeToken = JSON.parse(localStorage.getItem('token'));
userInfo.value = storeToken

})

</script>
<template>
  <header class="nav-header">
    <div class="container navbar-container">
      <nav class="navbar navbar-dark" id="navbarNav">
        <img src="@/assets/MangaReviewLogo.png" alt="logo">
        <div class="form-body">
          <form action="">
            <input class="form-input" placeholder="Titre de l'oeuvre" type="text">
            <span class="dropdown bootstrap-select show">
              <select class="selectpicker form-select-input" id="search_type" name="search_type"
                data-style="btn-default" tabindex="null">
                <option value="manga">Manga</option>
                <option value="anime">Anime</option>
              </select>
            </span>
            <button type="submit" class="form-button">search</button>
          </form>
        </div>
         <div>
            <button @click="clickDisconnect" type="submit" class="btn btn-info" id="deconnexion" v-if="userInfo">déconnexion</button>
          </div>
      </nav>
    </div>
  </header>
  <div class="nav-route">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
          <router-link class="navbar-brand" :to="{name: 'home'}"><b>Home</b></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="navbar-brand" :to="{name: 'manga'}"><b>Manga</b></router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link class="navbar-brand" :to="{name: 'anime'}"><b>Anime</b></router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!userInfo">
                <router-link class="navbar-brand" :to="{name: 'login'}"><b>Sign in</b></router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!userInfo">
                <router-link class="navbar-brand" :to="{name: 'register'}"><b>Sign up</b></router-link>
              </a>
            </li>
            <li class="nav-item" v-if="userInfo && userInfo.user.isAdmin === false">
              <a class="nav-link">
                <router-link class="navbar-brand" :to="{name: 'account'}"><b>Account</b></router-link>
              </a>
            </li>
            <li class="nav-item" v-if="userInfo && userInfo.user.isAdmin === true">
              <a class="nav-link">
                <router-link class="navbar-brand" :to="{name: 'dashboard'}"><b>dashboard</b></router-link>
              </a>
            </li>
            <li class="nav-item" v-if="userInfo">
              <span class="navbar-brand">
                  <b class="navbar-brand"> Hello {{userInfo.user.username}} !!!</b>
              </span>   
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>


</template>

<style>
header, .nav-route {
    background : linear-gradient(90deg,#04c 0,#17a2b8);
    border-top: 2px solid hsla(0,0%,100%,.1);
}
.form-body{
    align-items: center;
    display: flex;
    position: relative;
    background : rgb(53, 141, 249);
    max-width: 380px;
    max-height: 45px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
} 
.form-input{
    background: transparent;
    height: 45px;
    border: 0px;
    color: white;
    margin-left: 15px;
    border-right: 1px solid hsla(0,0%,100%,.1);
    outline: none;

}

::placeholder{
  opacity: 1;
}
.navbar-container{
    align-items: center;
    
}
.form-select-input{

    background: transparent;
    border: 0px;
    color: white;
    font-weight:bold ;
    border-right: 1px solid hsla(0,0%,100%,.1);
    
}
.form-button{
color: white;
border: none;
outline: none;
background: none;
    
}
#deconnexion{
  color: white;
}

</style>