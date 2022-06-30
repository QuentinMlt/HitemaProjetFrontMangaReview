<script setup>
import { ref, onMounted } from 'vue'
import Joi from 'joi';
import {useRoute} from "vue-router";
import StarRating from 'vue-star-rating'
import {useMangaStore} from "@/services/mangaStore";
import {useCommentStore} from "@/services/commentStore";
import {useReviewStore} from "@/services/reviewStore";

const {getMangaOrAnimeById} = useMangaStore();
const {postComment} = useCommentStore();
const {putReview} = useReviewStore()

const manga = ref("");
const mangaId = ref("");
const loading = ref(true);
const rating = ref("");
const newComment = ref("");
const errorSaisie = ref('');


onMounted( async () => {
    const route = useRoute();
    mangaId.value = route.params.id;
    console.log(mangaId.value);
    manga.value = await getMangaOrAnimeById(mangaId.value);
    console.log(manga.value)
    loading.value = false
})

async function setReview() {
   const scheme = Joi.object({
            score: Joi.number().integer().min(0).max(5).required(),
            manganimeId: Joi.string().required()
        });
        
        const payload = {
            score: rating.value,
            manganimeId: manga.value._id
        };

        const {value, error} = scheme.validate(payload);
        if (error) {
            console.log("PAS REUSSI")
            errorSaisie.value = error.message;
            return;
        }
        else{
            console.log("Reussi");
            await putReview(payload)
        }
    
}

async function AddComment() {
    const scheme = Joi.object({
            content: Joi.string().min(4).max(300).required(),
            manganimeId: Joi.string().required()
        });
        
        const payload = {
            content: newComment.value,
            manganimeId: manga.value._id
        };

        const {value, error} = scheme.validate(payload);
        if (error) {
            console.log("PAS REUSSI")
            errorSaisie.value = error.message;
            return;
        }
        else{
            console.log("Reussi");
            await postComment(payload)
            
        }
}




</script>

<template>

    <div class="container-sm rounded p-5 section-block" v-if="!loading">
        <div class="row">
            <div class="col-sm-3 card text-white p-2 thumbnail"><!-- MANGA IMG -->
                <img :src="manga.imageUrl" class="card-img">
            </div>
            <div class="col-sm-8"><!-- MANGA BIO -->
                <h2>{{manga.name}}</h2>
                <h3>by {{manga.authorId.username}}</h3>
                <h4>Description :</h4><br>
                <p>{{manga.description}}</p>
                <div class="row mb-2">
                    <p class="col-sm-6">Reviews : {{manga.reviews.length}} reviews</p>
                    <p class="col-sm-6">Comments : {{manga.comments.length}} comments</p>
                    <star-rating @click="setReview()" v-model:rating="rating" v-bind:star-size="30"></star-rating>
                </div>
                <div id="categoriesList">
                    <span class="badge badge-pill badge-primary me-1" v-for="category in manga.genres">{{category.genreId.name}}</span>
                </div>
            </div>
        </div>
    </div><br>

    <div class="container-sm rounded p-2 section-block" ><!-- REVIEWS SECTIONS -->
        <h3>Reviews Section</h3>
        <div class="ms-3 p-3 section-comment">
            <strong>Your opinion :</strong>
            <!-- ADD COMMENTS & REVIEWS -->
            <form>
                <div class="form-group mb-2">
                    <label for="Comments">Comments :</label>
                    <textarea type="text" class="form-control" id="Comments" v-model="newComment"></textarea>
                </div>
                <button class="btn btn-success" @click="AddComment(newComment)">Add your comment</button>
            </form>
            <hr>
            <div v-for="comment in manga.comments">
             <div class="card flex-row"><img class="card-img-left img_card ms-2" src="https://cdn.mangakawaii.pics/uploads/cdnimages/placeholder.png"/>
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">{{comment.authorId.name}}</h4>
                    <p class="card-text">{{comment.content}}</p>
                    <p class="card-subtitle">{{Date(comment.createdAt)}}</p>
                </div>
            </div><hr>
            </div>
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
