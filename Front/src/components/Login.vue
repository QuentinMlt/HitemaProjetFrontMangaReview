<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {useUserStore} from "@/services/userstore";
import { useRouter } from 'vue-router';
import { ref } from "vue";


const {connect, user} = useUserStore();
const router = useRouter();

export default {
	
  //data des données à vérifier 
  data() {
    return {
      v$: useValidate(),
      email: '',
      password:''
    }
  },
	
  //resultat en sortie apres avoir submit le formulaire
  methods: {
    async submitForm() {
      await this.v$.$validate()
      if(!this.v$.$error)
      {
		await connect(this.email,this.password)
		console.log(user.value.isAdmin)
		if (user.value.isAdmin === true){
			router.push({name: "moderateur"});
			
		}
		else if(user.value.isAdmin === false){
			router.push({name: "account"});
		}
		else {
			alert('Nobody found')
		}
      }
      else{
         alert('Form failed validation') 
      }
     
    },
  },

//regle de validation des champs
  validations(){
    return {
      email: {required, email},
      password: {required}
    }
  }

}

</script>

<template>
<div class="login-form">    
    <form>
		<div class="avatar"><i class="material-icons">&#xE7FF;</i></div>
    	<h4 class="modal-title">Login to Your Account</h4>
        <div class="form-group">
            <input type="text" name="email" class="form-control" v-model="email" placeholder="Email" required="required">
        </div>
        <div class="form-group">
            <input type="password" name="password" class="form-control" v-model="password" placeholder="Password" required="required">
        </div>
        <input @click="submitForm()" name="button" class="btn btn-primary btn-block btn-lg" value="Login">            
    </form>			
    <div class="text-center small">Don't have an account? <a><router-link :to="{name: 'register'}"><b>Sign up</b></router-link></a></div>
</div>
</template>

<style>
body {
	color: #999;
	background: #f5f5f5;
	font-family: 'Varela Round', sans-serif;
}
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
}
.login-form form {
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
