<script setup>
import {ref, onMounted} from 'vue'
import {useMangaStore} from "@/services/mangaStore";
import StarRating from 'vue-star-rating'

const {getMangaOrAnimeByUser, deleteMangaOrAnime} = useMangaStore()

const MangaAnime = ref("")
const userInfo = ref("")

onMounted(async () => {
    //GET USER
    const storeToken = JSON.parse(localStorage.getItem('token'));
    userInfo.value = storeToken
    //GET HIS MANGANIME
  MangaAnime.value = await getMangaOrAnimeByUser(userInfo.value.user._id);
})

//DELETE THE MANGANIME
async function deleteMangAnime(id) {
    await deleteMangaOrAnime(id);
}

</script>


<template>

<h5 class="mt-2">Mangas and Animes</h5>

<div v-for="entity in MangaAnime"><!-- DISPLAY MANGANIME-->
    <div class="card flex-row"><img class="card-img-left img_card ms-2" :src="entity.imageUrl"/>
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">{{entity.name}}</h4>
            <h5 class="card-subtitle">{{entity.type}}</h5><br>
            <div class="row col-sm-6">
                <router-link class="btn btn-info mt-2 ms-2" :to="{name: entity.type.toLowerCase() + 'ById', params: { id: entity._id }}">Voir</router-link>
                <router-link class="btn btn-dark mt-2 ms-2" :to="{name: 'updateMangaOrAnime', params: { id: entity._id }}">Update</router-link>
                <form><button class="btn btn-danger mt-1" @click="deleteMangAnime(entity._id)">Delete</button></form>
            </div>
        </div>
    </div><hr>
</div>

</template>

<style>
.img_card {
    width: 15%;
}
</style>
