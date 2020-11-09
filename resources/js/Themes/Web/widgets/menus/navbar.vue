<template>
<div class="container">
<nav class="navbar navbar-expand-lg bg-color-red">
  <a class="navbar-brand" href="/">SoftwaresCares</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/services">Our Services</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/privacypolicy">Privacy Policy</router-link>
      </li>
    </ul>
  </div>
</nav>
</div>
</template>

<style >
    
</style>

<script>
export default {
    
}
</script>