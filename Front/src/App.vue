<script setup>
import HeaderVue from './components/Header.vue';
</script>

<template>
  <HeaderVue></HeaderVue>
  <div class="container mt-5">
    <router-view></router-view>
  </div>
</template>

<style>
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
