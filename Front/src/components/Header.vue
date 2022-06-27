<script setup>

</script>

<template>
  
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <h3>MangaReview</h3>
    <div class="collapse navbar-collapse ms-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'manga'}">Manga</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'anime'}">Anime</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Sign in</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">Sign up</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>@import 'bootstrap/dist/css/bootstrap.min.css';</style>