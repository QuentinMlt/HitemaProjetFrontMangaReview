<script setup>
import { ref } from 'vue';


const listDObjets =ref([
  {id:0, name:"Alice", image:"https://cdn.mangakawaii.pics/uploads/manga/nano-machine/cover/cover_250x350.jpg?v=1655847690"},
  {id:1, name:"Bob", image:"https://cdn.mangakawaii.pics/uploads/manga/nano-machine/cover/cover_250x350.jpg?v=1655847690"},
  {id:2, name:"Arthur", image:"https://cdn.mangakawaii.pics/uploads/manga/nano-machine/cover/cover_250x350.jpg?v=1655847690"},
  {id:2, name:"Ruben", image:"https://cdn.mangakawaii.pics/uploads/manga/nano-machine/cover/cover_250x350.jpg?v=1655847690"}
])

</script>

<template>
    <div class="rounded" id="container">
        <h2 id="title">Liste des mangas</h2>
        <p v-for="i in tableau">{{i}}</p>
        <div class="row" id="listContainer">
            <div v-for="monObjet in listDObjets" :key="monObjet.id" class="col-4 mt-3">
                <div class="card bg-dark text-white thumbnail">
                    <img :src="monObjet.image" class="card-img" >
                    <div class="card-img-overlay">
                        <h5 class="card-title">{{monObjet.name}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
#container {
    width: 550px;
    background: white;
}
#title {
    color: orange;
}

#listContainer {
    width: 500px;
}

.thumbnail {
    width: 150px;
    
}

.card-img-overlay {
    box-shadow: inset 0px 50px 33px 0 #000

}


</style>