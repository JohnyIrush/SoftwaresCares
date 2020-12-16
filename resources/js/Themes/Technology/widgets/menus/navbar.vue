<template>
<div class="container">
<nav class="navbar navbar-expand-lg bg-color-red">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/SoftwaresCares/technology/windows">Windows <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/technology/macos">Macos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/technology/linux">Linux</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/technology/android">Android</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/SoftwaresCares/technology/ios">Ios</router-link>
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