<script setup>
const MangaAnime = [
    {id : 1, name : "Solo Leveling", type: "Manga", review : 5, comment: "blablabla" },
    {id : 2, name : "Naruto", type: "Anime", review : 5, comment: "blablabla" }
]
</script>


<template>

<h5>Reviews</h5>

<div v-for="entity in MangaAnime">
    <div class="card flex-row"><img class="card-img-left img_card ms-2" src="https://cdn.mangakawaii.pics/uploads/cdnimages/open-book.svg"/>
        <div class="card-body">
            <h4 class="card-title h5 h4-sm">{{entity.name}}</h4>
            <p class="card-subtitle">{{entity.type}}</p><br>
            <p class="card-text">{{entity.comment}}</p>
            <p class="card-subtitle">08/10/2022 12:50:17</p>
        </div>
    </div><hr>
</div>

</template>

<style>
.img_card {
    width: 15%;
}
</style>