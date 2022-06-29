<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
import {useMangaStore} from "@/services/mangaStore";
const {getMangasList, getCover} = useMangaStore();
</script>

<template>
  <HeaderVue></HeaderVue>
  <div class="container mt-5 mb-5">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
body {
  background: rgb(249,249,249);
}
</style>
<link rel="stylesheet" href="style.css">