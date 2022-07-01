
<script setup>
import {ref,onMounted} from 'vue'
import MAABU from './MangaAndAnimeByUser.vue';
import RBU from './ReviewByUser.vue';
import CBU from './CommentsByUser.vue';

const userInfo = ref("")
const section = ref("Publications")

onMounted(() => {
const storeToken = JSON.parse(localStorage.getItem('token'));
userInfo.value = storeToken;
})

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
                            <div id="description" v-if="userInfo.description">
                                <p>{{userInfo.user.description}}</p>
                            </div>
                            <div id="description" v-else>
                                <p>vous n'avez pas de description</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 mt-2 mb-2">
                        <div class="p-3" id="block"><!-- USER INFO -->
                            <h5 class="fw-bold">Informations</h5>
                            <div id="userInformation" v-if="userInfo">
                            <p>Username : {{userInfo.user.username}}</p><hr>
                            <p>Email : {{userInfo.user.email}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2 mt-2">
                        <button class="btn  block-title text-primary fw-bold mb-2" @click="displayPublicationsSection()">Publications</button>
                        <button class="btn  block-title text-primary fw-bold mb-2" @click="displayReviewsSection()">Reviews</button>
                        <button class="btn  block-title text-primary fw-bold mb-2" @click="displayCommentsSection()">Comments</button>
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