<script setup>
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <HeaderVue></HeaderVue>
  <div class="container mt-5 mb-5">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style>
body {
  background: rgb(249,249,249);
}
</style>

