<script setup>
import HeaderVue from './components/Header.vue';
import {useMangaStore} from "@/services/mangaStore";
const {getMangasList} = useMangaStore();
const {getCoverByMangaId} = useMangaStore();
</script>

<template>
  <HeaderVue></HeaderVue>
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
body {
  background: rgb(249,249,249);
}
</style>
