<script setup>
import { ref } from 'vue';
import {useMangaStore} from "@/services/mangaStore";

const {getMangasList, getCoverByMangaId} = useMangaStore();


// Get mangas List
async function getAll() {
    let list =  await getMangasList();
    return list.data;
}

//get Img by coverId
async function getImg(coverId) {
    const coverLink =  await getCover(coverId);
    return coverLink;
}

let mangasList = await getAll();
let newArray = mangasList[0].relationships.filter(function (el)
{
  return el.type == "cover_art";
});
let test = await getImg(newArray[0].id);
console.log(newArray[0].id)



</script>

<template>
    <div class="rounded pt-5 ps-5" id="container">
        <h2 id="title">Mangas List</h2><br>
        <div class="row row-cols-6" id="listContainer"> <!-- Display -->
            <div v-for="manga in mangasList" :key="manga.id" class="col mt-3">
                <div class="card bg-dark text-white thumbnail">
                    <img :src="getImg(manga.id)" class="card-img" >
                    <div class="card-img-overlay">
                        <h5 class="card-title">{{manga.title.en}}</h5>
                    </div>
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
}



.thumbnail {
    width: 150px;
    
}

.card-img-overlay {
    box-shadow: inset 0px 50px 33px 0 #000

}


</style>