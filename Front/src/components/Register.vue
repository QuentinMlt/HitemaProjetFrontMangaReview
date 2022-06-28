<script  setup>

</script>

<template>
<div class="container" id ="app">
    <form class="row g-3">
        <div class="col-md-6">
          <label for="username" class="form-label">Username</label>
          <input type="text" v-model="value" :maxlength="maxlength" class="form-control" >
        </div>
        <div class="col-md-6">
          <label for="mail" class="form-label">Mail address</label>
          <input type="email" class="form-control" placeholder="exemple@mail.fr">
        </div>
        <div class="col-md-6">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control">
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
</div>

</template>