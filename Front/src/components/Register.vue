<script >
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'

export default {

  //data des données à vérifier 
  data() {
    return {
      v$: useValidate(),
      email: '',
      username:'',
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
      username: {
        required,
        minLength: minLength(4), 
        maxLength: maxLength(20),
        },
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
<div class="container" id ="app">
    <form class="row g-3">
        <div class="col-md-6">
          <label for="username" class="form-label">Username</label>
          <input type="text" v-model="username" class="form-control" >
        </div>
        <div class="col-md-6">
          <label for="mail"  class="form-label">Mail address</label>
          <input type="email" v-model="email" class="form-control" placeholder="exemple@mail.fr ">
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control">
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
</div>

</template>