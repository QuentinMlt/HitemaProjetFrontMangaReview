<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

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
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error)
      {
        alert('Form successfully submitted')
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
      password: {
        required, 
        minLength: minLength(4), 
        maxLength: maxLength(20),
        containsUppercase: function(value) {
        return /[A-Z]/.test(value)
        },
        containsNumber: function(value) {
        return /[0-9]/.test(value)},
        }
    }
  }

}



</script>

<template>
<div class="container">
  <div class="box-container">
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control"  v-model="password" placeholder="Password">
  </div>
  <button @click="submitForm()" class="btn btn-primary">Submit</button>
  </form>
</div>
</div>
</template>

<style>
.box-container{
width: 500px;
}
</style>
