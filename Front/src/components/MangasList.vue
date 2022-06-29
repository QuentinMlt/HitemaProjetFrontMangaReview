<script setup>
import { ref, onMounted } from 'vue'
import {useMangaStore} from "@/services/mangaStore";

const {getMangasList, getCover} = useMangaStore();

const mangasList = ref([]);
const newMangasList = ref([]);
const test = ref([])

// on component creation
onMounted(async () => {
  let mangasData = await getMangasList();

  mangasList.value = mangasData.filter(function (el) {return el.type == "Manga"});
  newMangasList.value = mangasList.value;
  })



//filter manga by letter
async function filterByLetter(letter) {
    console.log(letter)
    if(letter == "#") 
    {
         newMangasList.value =  mangasList.value;
    }
    else {
         newMangasList.value =  mangasList.value.filter(function (el) {return el.name == letter});
    }

}

const alphabet = ["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

</script>

<template>

    

    <div class="rounded p-5" id="container">
        <h2 id="title">Mangas List</h2><br>
        <router-link :to="{name: 'addMangaOrAnime'}">Add one</router-link>
        <div class="container-sm rounded p-2 section-block">
            <h5>Categories : </h5>
            <hr>
            <ul class="nav nav-fill mt-3">
                <li  v-for="letter in alphabet" class="nav-item px-sm-0 px-2">
                    <button class="btn alphabet" @click="filterByLetter(letter)">{{letter}}</button>
                </li>
            </ul>
        </div>
        <div class="row" id="listContainer"> <!-- Display -->
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
    
</template>

<style>
#container {
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
}
#title {
    color: orange;
}

.card-img-overlay {
    box-shadow: inset 0px 50px 33px 0 #000;
}


</style>
