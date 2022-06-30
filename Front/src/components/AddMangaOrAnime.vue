<script setup>
import {ref, onMounted} from 'vue'
import Joi from 'joi';
import {useMangaStore} from "@/services/mangaStore";
import {useCategoriesStore} from "@/services/categoriesStore";
const {addMangaOrAnime} = useMangaStore();
const {getCategoriesList} = useCategoriesStore();

const name = ref("");
const description = ref("");
const type = ref("");
const category = ref("");
const categoriesList = ref([]);
const categoriesIdList = ref([]);
const allCategories = ref([]);
const imageUrl = ref("");
const errorSaisie = ref('');


onMounted(async () => {
  allCategories.value = await getCategoriesList();
})



function addCategory() {
    if(!categoriesList.value.includes(category.value)) {
        categoriesList.value.push(category.value);
    } 
    if(!categoriesIdList.value.includes(category.value._id)) {
        categoriesIdList.value.push(category.value._id);
    } 
}

function deleteCategory(name) {
    categoriesList.value.pop(name);
}

async function submitForm() {
    const scheme = Joi.object({
            name: Joi.string().min(2).max(100).required(),
            description: Joi.string().min(10).max(500).required(),
            type: Joi.string().required(),
            categoriesList: Joi.array().required(),
            imageUrl: Joi.string().required()
        });
        const payload = {
            name: name.value, 
            description: description.value,
            type: type.value,
            categoriesList: categoriesIdList.value,
            imageUrl: imageUrl.value
        };

        const {value, error} = scheme.validate(payload);
        if (error) {
            console.log("PAS REUSSI")
            errorSaisie.value = error.message;
            console.log(errorSaisie.value)
            return;
        }
        else{
            console.log("Reussi");
            await addMangaOrAnime(payload);
        }
}

</script>

<template>
<div class="login-form">    
    
		<div class="avatar"><img class="card-img " src="https://cdn.mangakawaii.pics/uploads/cdnimages/open-book.svg"/></div>
    	<h4 class="modal-title">Add your Manga / Anime</h4>

        <div class="form-group">
            <input type="text" name="name" class="form-control" v-model="name" placeholder="Name" required="required">
        </div>
        <div class="form-group">
            <textarea type="text" name="description" class="form-control" v-model="description" placeholder="Description" required="required"></textarea>
        </div>
        <div class="form-group">
            <select class="form-select" v-model="type">
                <option value="" disabled selected>Type</option>
                <option value="Manga">Manga</option>
                <option value="Anime">Anime</option>
            </select>
        </div>
        <div class="form-group">
            <select class="form-select" id="categoriesSelect" v-model="category">
                <option value="" disabled selected>Categories</option>
                <option v-for="category in allCategories" :value="category">{{category.name}}</option>
                
            </select>
            <br>
            
            <div id="categoriesList">
                <span class="badge badge-pill badge-primary me-1" v-for="category in categoriesList"><button class="me-1 badge badge-danger " @click="deleteCategory(category)">x</button>{{category.name}}</span>
            </div>
            <button class="mt-1 btn btn-success " @click="addCategory()">Add category</button>
            <div>

            </div>
        </div>
        <div class="form-group">
            <input type="text" name="imageUrl" class="form-control" v-model="imageUrl" placeholder="Image Url" required="required">
        </div>
        <input @click="submitForm()" name="button" class="btn btn-primary btn-block btn-lg" value="Add">            
    		
</div>
</template>

<style>

.form-control {
	box-shadow: none;
	border-color: #ddd;
}
.form-control:focus {
	border-color: #4aba70; 
}
.login-form {
	width: 350px;
	margin: 0 auto;
	padding: 30px 0;
    color: #434343;
	border-radius: 1px;
	margin-bottom: 15px;
	background: #fff;
	border: 1px solid #f3f3f3;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
	padding: 30px;
}

.login-form h4 {
	text-align: center;
	font-size: 22px;
	margin-bottom: 20px;
}
.login-form .avatar {
	color: #fff;
	margin: 0 auto 30px;
	text-align: center;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	z-index: 9;
	background: rgb(8,100,197);
	padding: 15px;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.form-select {
    color: gray
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
}
.login-form .avatar i {
	font-size: 62px;
}
.login-form .form-group {
	margin-bottom: 20px;
}
.login-form .form-control, .login-form .btn {
	min-height: 40px;
	border-radius: 2px; 
	transition: all 0.5s;
}
.login-form .close {
	position: absolute;
	top: 15px;
	right: 15px;
}
.login-form .btn, .login-form .btn:active {
	background: rgb(8,100,197) !important;
	border: none;
	line-height: normal;
}
.login-form .btn:hover, .login-form .btn:focus {
	background: rgb(6,81,164) !important;
}
.login-form .checkbox-inline {
	float: left;
}
.login-form input[type="checkbox"] {
	position: relative;
	top: 2px;
}
.login-form .forgot-link {
	float: right;
}
.login-form .small {
	font-size: 13px;
}
.login-form a {
	color: rgb(8,100,197);
}
.modal-title{
	color: orange;
}
</style>