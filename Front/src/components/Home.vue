
<script setup>
import {ref, onMounted} from 'vue'
import {useReviewStore} from "@/services/reviewStore";

import {useMangaStore} from "@/services/mangaStore";

const {get10BestMangaAndAnime} = useReviewStore();
const {getMangaOrAnimeList} = useMangaStore();

const MangaAnime = ref([]);
const loading = ref(false)


onMounted(async () => {
  MangaAnime.value = await get10BestMangaAndAnime();
  console.log(MangaAnime.value[0])
  loading.value = true
})

</script>

<template>
    <h3>TOP 10 MANGAS AND ANIMES</h3>
    <div class="row">
        <div v-for="manga in MangaAnime" :key="manga._id" class="col-sm-3 mt-3" v-if="loading">
            <router-link :to="{name: 'mangaById', params: { id: manga.manganimeId._id }}">
                <div class="card bg-dark text-white thumbnail">
                    <img :src="manga.manganimeId.imageUrl" class="card-img"/>
                    <div class="card-img-overlay">
                        <h5 class="card-title">{{manga.manganimeId.name}}</h5>
                    </div>
                </div>
            </router-link>
        </div>
    </div>


    <div id="block_white"></div>
    
</template>

<style>
#block_white {
    height: 200px;
}
</style>