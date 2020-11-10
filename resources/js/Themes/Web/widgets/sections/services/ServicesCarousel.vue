<template>
<div  class="carousel slide mt-3 mb-3 bg-color-white .container-fluid" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner section-height">
    <div class="carousel-item active">
      <img src="/Developement/Images/binary.jpg" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="/Developement/Images/cog-wheels.jpg" class="d-block w-100" >
    </div>
    <div class="carousel-item">
      <img src="/Developement/Images/guidesolutions.jpg" class="d-block w-100" >
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</template>

<script>
export default {

}
</script>

<style>


</style>