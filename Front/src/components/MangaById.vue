<script setup>
import { ref, onMounted } from 'vue'
import {useRoute} from "vue-router";
import StarRating from 'vue-star-rating'



onMounted( () => {
    const route = useRoute();
    const mangaId = ref(route.params.id);
    console.log(mangaId.value);
})



</script>

<template>

    <div class="container-sm rounded p-5 section-block">
        <div class="row">
            <div class="col-sm-3 card text-white p-2 thumbnail">
                <img src="https://mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/3b736a05-2313-40b4-8af1-94b85b3efc72.jpg.256.jpg" class="card-img">
            </div>
            <div class="col-sm-8">
                <h2>Title</h2>
                <h3>By Author</h3>
                <h4>Description :</h4><br>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div class="row">
                <p class="col-sm-6">Reviews : *stars* number of reviews</p>
                <p class="col-sm-6">Comments : number of comments</p>
                </div>
            </div>
        </div>
    </div><br>

    <div class="container-sm rounded p-2 section-block" >
        <h3>Reviews Section</h3>
        <div class="ms-3 p-3 section-comment">
            <strong>Your opinion :</strong>
            <form>
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
