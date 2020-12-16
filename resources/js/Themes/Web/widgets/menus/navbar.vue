<template>
<div class="container">
<nav class="navbar navbar-expand-lg bg-color-red">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/SoftwaresCares/home">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/services">Services</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/contact">Contact Us</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/technology">Technology</router-link>
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