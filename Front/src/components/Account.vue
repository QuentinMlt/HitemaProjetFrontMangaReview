
<script setup>
import {ref} from 'vue'
import MAABU from './MangaAndAnimeByUser.vue';
import RBU from './ReviewByUser.vue';
import CBU from './CommentsByUser.vue';

const section = ref("Publications")

const username = "Quentin";
const email = "email@gmail.com"; 

function displayPublicationsSection() {
   section.value = "Publications";
}

function displayReviewsSection() {
   section.value = "Reviews";
}

function displayCommentsSection() {
   section.value = "Comments";
}


</script>

<template>
        <div class="container-sm">    
            <div id="userSection" class="row">
                <div class="col-sm-2 p-2 thumbnail"><!-- USER IMG -->
                        <img src="https://mangadex.org/covers/a96676e5-8ae2-425e-b549-7f15dd34a6d8/3b736a05-2313-40b4-8af1-94b85b3efc72.jpg.256.jpg" class="card-img">
                </div>
                <div class="row col-sm-10">
                    <div class="col-sm-5 mt-2">
                        <div class="p-3" id="block"><!-- Description -->
                            <h5 class="fw-bold">Bio</h5>
                            <div id="description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 mt-2 mb-2">
                        <div class="p-3" id="block"><!-- USER INFO -->
                            <h5 class="fw-bold">Informations</h5>
                            <div id="userInformation">
                            <p>Username : {{username}}</p><hr>
                            <p>Email : {{email}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 mt-2">
                        <button class="btn bg-light block-title fw-bold btn-outline-light" @click="displayPublicationsSection()">Publications</button>
                        <button class="btn bg-light block-title fw-bold btn-outline-light" @click="displayReviewsSection()">Reviews</button>
                        <button class="btn bg-light block-title fw-bold btn-outline-light" @click="displayCommentsSection()">Comments</button>
                    </div>
                   
                    <div class="col-sm-9 mt-2 ms-2" id="block"><!-- Get vue specific vue by button above -->
                        <MAABU v-if="section == 'Publications'"></MAABU>
                        <RBU v-if="section == 'Reviews'"></RBU>
                        <CBU v-if="section == 'Comments'"></CBU>
                    </div>
                </div>
            </div>
        </div>

</template>


<style>


#description {
    max-height: 100px;
    overflow: auto;
}

#block {
    background: white;
    box-shadow: 1px 1px 20px 1px rgba(0, 0, 0, .5);
    overflow: hidden;
}

#userInformation {
    overflow:auto;
}

.block-title {
    color: orange;
}

h5 {
    color: orange;
}
</style>