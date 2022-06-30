<template>
<!-- Footer -->
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->


    <!-- Section: Text -->
    <section class="mb-4">
      <p>
        MangaReview allow you to share your opinion about mangas and animes with other people.
      </p>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
         <!--Grid column-->
        <div class="col mb-4 mb-md-0">
          <router-link :to="{name: 'home'}" class="text-uppercase text-white fw-bold text-decoration-none">Home</router-link>
        </div>
        <!--Grid column-->
         <!--Grid column-->
        <div class="col mb-4 mb-md-0">
          <router-link :to="{name: 'manga'}" class="text-uppercase text-white fw-bold text-decoration-none">Mangas</router-link>
        </div>
        <!--Grid column-->
         <!--Grid column-->
        <div class="col  mb-4 mb-md-0">
          <router-link :to="{name: 'anime'}" class="text-uppercase text-white fw-bold text-decoration-none">Animes</router-link>
        </div>
        <!--Grid column-->
         <!--Grid column-->
        <div class="col  mb-4 mb-md-0">
          <router-link :to="{name: 'register'}" class="text-uppercase text-white fw-bold text-decoration-none">Sign up</router-link>
        </div>
        <!--Grid column-->
        <!--Grid column-->
        <div class="col mb-4 mb-md-0">
          <router-link :to="{name: 'login'}" class="text-uppercase text-white fw-bold text-decoration-none">Sign in</router-link>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
      
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2022 Copyright:
    <router-link :to="{name: 'home'}" class="text-white text-decoration-none fw-bold">MangaReview</router-link>
  </div>
  <!-- Copyright -->
</footer>
<!-- Footer -->
</template>

<style>
footer {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 20, 0.8)), url('https://w.wallha.com/ws/12/4Bxf9DFw.jpg') no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
  font-variant-caps: all-small-caps;
  font-variant: bold;
}

.git {
  width: 150px;
  filter: brightness(0) invert(1);
}
#github {
  width:120px;
}
</style>