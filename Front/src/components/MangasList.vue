<script setup>
import { ref, onMounted } from 'vue'
import {useMangaStore} from "@/services/mangaStore";

const {getMangasList, getCover} = useMangaStore();

const mangasList = ref([]);

onMounted(async () => {
  let mangasData = await getAll();
  for(let i = 0; i < mangasData.length; i++) {
    let newArray = mangasData[i].relationships.filter(function (el) { return el.type == "cover_art"; });
    mangasData[i]['lien'] = await getCover(mangasData[i]['id'], newArray[0].id);
  }

  mangasList.value = mangasData;
})

// Get mangas List
async function getAll() {
    let list =  await getMangasList()
    return list.data;
}

</script>

<template>
    <div class="rounded pt-5 ps-5 pe-5" id="container">
        <h2 id="title">Mangas List</h2><br>
        <div class="row" id="listContainer"> <!-- Display -->
            <div v-for="(manga, index) in mangasList" :key="manga.id" class="col-sm-3 mt-3">
                <div class="card bg-dark text-white thumbnail">
                    <img :src="manga.lien" class="card-img" >
                    <div class="card-img-overlay">
                        <h5 class="card-title">{{manga.attributes.title.en}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
#container {
    max-width: 800px;
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
}
#title {
    color: orange;
}

.card-img-overlay {
    box-shadow: inset 0px 50px 33px 0 #000

}


</style>