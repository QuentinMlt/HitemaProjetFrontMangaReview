<script setup>
import { ref, onMounted } from 'vue'
import {useMangaStore} from "@/services/mangaStore";

const {getMangasList} = useMangaStore();

const animesList = ref([]);
const newMangasList = ref([]);
const test = ref([])

// on component creation
onMounted(async () => {
  let animesData = await getMangasList();
   
  animesList.value = animesData.filter(function (el) {return el.type == "Anime"});
  newMangasList.value = animesList.value;
  })



//filter anime by letter
async function filterByLetter(letter) {
    console.log(letter)
    if(letter == "#") 
    {
         newMangasList.value =  animesList.value;
         console.log(animesList.value)
         
    }
    else {
         newMangasList.value =  animesList.value.filter(function (el) {return el.name == letter});
        
    }

}

const alphabet = ["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

</script>

<template>

    

    <div class="rounded p-5" id="container">
        <h2 id="title">Animes List</h2><br>
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
                <div v-for="(anime, index) in newMangasList" :key="anime._id" class="col-sm-3 mt-3">
                    <router-link :to="{name: 'animeById', params: { id: anime._id }}">
                        <div class="card bg-dark text-white thumbnail">
                            <img :src="anime.imageUrl" class="card-img" >
                            <div class="card-img-overlay">
                                <h5 class="card-title">{{anime.name}}</h5>
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
