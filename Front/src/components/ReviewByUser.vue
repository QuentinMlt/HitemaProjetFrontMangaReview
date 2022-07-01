<script setup>
import {ref, onMounted} from 'vue'
import {useReviewStore} from "@/services/reviewStore";
import StarRating from 'vue-star-rating'

const {getReviewsByUser} = useReviewStore()

const review = ref("")
const loading = ref(false);
const userInfo = ref("")

onMounted(async () => {
    //GET USER
    const storeToken = JSON.parse(localStorage.getItem('token'));
    userInfo.value = storeToken
    //GET HIS REVIEWS
  review.value = await getReviewsByUser(userInfo.value.user._id);
  loading.value = true;
})
</script>


<template>

<h5 class="mt-2"  v-if="loading">Reviews</h5><!--DISPLAY REVIEW-->

<div v-for="entity in review" v-if="loading">
    <div class="card flex-row"><img class="card-img-left img_card ms-2" :src="entity.manganimeId.imageUrl"/>
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">{{entity.manganimeId.name}}</h4>
            <p class="card-subtitle">{{entity.manganimeId.type}}</p><br>
            <p class="card-text"><star-rating :rating="entity.score" v-bind:star-size="30"></star-rating>
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