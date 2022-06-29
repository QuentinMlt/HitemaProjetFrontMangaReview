<script setup>
import { ref, onMounted } from 'vue'
import {useRoute} from "vue-router";
import StarRating from 'vue-star-rating'
import {useMangaStore} from "@/services/mangaStore";

const {getMangaById} = useMangaStore();

const manga = ref("");

onMounted( async () => {
    const route = useRoute();
    const mangaId = ref(route.params.id);
    console.log(mangaId.value);
    manga.value = await getMangaById(mangaId.value);
    console.log(manga.value)
})



</script>

<template>

    <div class="container-sm rounded p-5 section-block">
        <div class="row">
            <div class="col-sm-3 card text-white p-2 thumbnail"><!-- MANGA IMG -->
                <img :src="manga.imageUrl" class="card-img">
            </div>
            <div class="col-sm-8"><!-- MANGA BIO -->
                <h2>{{manga.name}}</h2>
                <h3>{{manga.authorId}}</h3>
                <h4>Description :</h4><br>
                <p>{{manga.description}}</p>
                <div class="row">
                <p class="col-sm-6">Reviews : *stars* number of reviews</p>
                <p class="col-sm-6">Comments : number of comments</p>
                </div>
            </div>
        </div>
    </div><br>

    <div class="container-sm rounded p-2 section-block" ><!-- REVIEWS SECTIONS -->
        <h3>Reviews Section</h3>
        <div class="ms-3 p-3 section-comment">
            <strong>Your opinion :</strong>
            <form><!-- ADD COMMENTS & REVIEWS -->
                <div class="form-group mb-2">
                    <label for="Comments">Comments :</label>
                    <textarea type="text" class="form-control" id="Comments"></textarea>
                </div>
                <star-rating v-model:rating="rating" v-bind:star-size="30"></star-rating>
            
            </form>
            
            <hr>
        </div>
        
    </div> 
    

</template>

<style>
.section-block {
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
    font-variant-caps: all-small-caps;
}
.section-comments {
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
    font-variant-caps: all-small-caps;
}

.thumbnail {
    background-color: rgb(249,249,249)
}

.card-img {
    padding: 0px 0px;
}
</style>
