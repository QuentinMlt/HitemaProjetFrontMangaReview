<script setup>
import {ref, onMounted} from 'vue'
import {useMangaStore} from "@/services/mangaStore";
import StarRating from 'vue-star-rating'

const {getReviewsByUser} = useMangaStore()

const MangaAnime = ref("")
let userId = "62bca3b7e972e5844380d4c0";

onMounted(async () => {
  MangaAnime.value = await getReviewsByUser(userId);
})
console.log(MangaAnime.value)
</script>


<template>

<h5 class="mt-2">Reviews</h5>

<div v-for="entity in MangaAnime.value">
    <div class="card flex-row"><img class="card-img-left img_card ms-2" :src="entity.manganimeId.imageUrl"/>
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">{{entity.manganimeId.name}}</h4>
            <p class="card-subtitle">{{entity.manganimeId.type}}</p><br>
            <p class="card-text"><star-rating :rating="ezntity.score" v-bind:star-size="30"></star-rating>
            <router-link class="btn btn-info mt-2" :to="{name: entity.manganimeId.type.toLowerCase() + 'ById', params: { id: entity.manganimeId._id }}">Update review</router-link>
            </p>
        </div>
    </div><hr>
</div>

</template>

<style>
.img_card {
    width: 15%;
}
</style>