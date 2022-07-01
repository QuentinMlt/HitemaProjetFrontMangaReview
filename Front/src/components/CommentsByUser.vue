<script setup>
import {ref, onMounted} from 'vue'
import {useCommentStore} from "@/services/commentStore";
import StarRating from 'vue-star-rating'


const {deleteComment, getCommentsByUser} = useCommentStore()

const MangaAnime = ref("")
const userInfo = ref("")

onMounted(async () => {
    //GET USER
    const storeToken = JSON.parse(localStorage.getItem('token'));
    userInfo.value = storeToken
    //GET HIS COMMENTS
    MangaAnime.value = await getCommentsByUser(userInfo.value.user._id);
})
//DELETE COMMENT
async function delComment(id) {
    await deleteComment(id);
}

</script>


<template>

<h5 class="mt-2">Reviews</h5>

<div v-for="entity in MangaAnime"><!-- DISPLAY COMMENTS -->
    <div class="card flex-row"><img class="card-img-left img_card ms-2" :src="entity.manganimeId.imageUrl"/>
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">{{entity.manganimeId.name}}</h4>
            <h5 class="card-subtitle">{{entity.manganimeId.type}}</h5><br>
            <p class="card-text">{{entity.content}}</p>
            <p class="card-text">{{Date(entity.createdAt)}}</p>
            <div class="row col-sm-6">
                <router-link class="btn btn-info mt-2" :to="{name: entity.manganimeId.type.toLowerCase() + 'ById', params: { id: entity.manganimeId._id }}">Update Comments</router-link>
                <form><button class="btn btn-danger mt-1" @click="delComment(entity._id)">Delete</button></form>
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