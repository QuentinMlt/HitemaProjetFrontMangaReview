<script setup>
import { ref, onMounted } from 'vue'
import {useMangaStore} from "@/services/mangaStore";

const {getMangaOrAnimeList} = useMangaStore();
const mangasList = ref([]);
const newMangasList = ref([]);
const test = ref([])

// on component creation
onMounted(async () => {
  let mangasData = await getMangaOrAnimeList();
  mangasList.value = mangasData.filter(function (el) {return el.type == "Manga"});
  newMangasList.value = mangasList.value;
  })
</script>

<template>
 <div class="rounded p-5" id="container">
        <h2 id="title">MODERATOR PANEL</h2><br>
        <div class="row" id="listContainer"> <!-- Display -->
                <div class=""  id="title-manga" >
                    <div>Liste des animes / manga</div>
                    <div v-for="(manga, index) in newMangasList" :key="manga._id" class="col-sm-3 mt-3">
                    <router-link :to="{name: 'mangaById', params: { id: manga._id }}">
                        <div class="card bg-dark text-white thumbnail">
                            <img :src="manga.imageUrl" class="card-img" >
                            <div class="card-img-overlay">
                                <h5 class="card-title">{{manga.name}}</h5>
                            </div>
                        </div>
                    </router-link>
                </div>
                </div>
        </div>
    </div>
</template>
<style>
#container {
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
}
#title {
    color: orange;
    text-align: center;
}
#box-user{
    padding: 300px;
    border: 2px solid black;
}
#title-manga{
    text-align: center;
}
</style>