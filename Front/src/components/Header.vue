<script setup>
</script>

<template>
  
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary" id="navbarNav">
    <img src="@/assets/MangaReviewLogo.png" alt="logo">
    <div class="collapse navbar-collapse ms-5" >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'home'}"><b>Home</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'manga'}"><b>Manga</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'anime'}"><b>Anime</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'login'}"><b>Sign in</b></router-link>
        </li>
        <li class="nav-item">
          <router-link class="navbar-brand" :to="{name: 'register'}"><b>Sign up</b></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
#navbarNav {
    background : linear-gradient(90deg,#04c 0,#17a2b8);
}


</style>