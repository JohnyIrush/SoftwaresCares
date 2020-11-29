<template>
  <div class="col-12 mt-1 p-3 Process-height bg-color-darkblue card">
    <div class="row">
      <div class="col-12 rec-frame-height bg-color-red">
          <h1 class="text-primary text-center">Our 6D Process</h1>
      </div>
    </div>
   <sixD></sixD>
  <div class="row  mt-3 mb-3 justify-content-center">
      <div class="col-sm-3">
    <div class="card bg-color-dark">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div class="col-sm-3 justify-content-center">
    <div class="card bg-color-dark">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div class="col-sm-3 justify-content-center">
      <div class="card bg-color-dark">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
  </div>
  <div class="row mb-3 justify-content-center">
      <div class="col-sm-3">
    <div class="card bg-color-dark">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div class="col-sm-3">
    <div class="card bg-color-dark">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
      <div class="col-sm-3">
      <div class="card bg-color-dark">
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
  </div>
  </div>  
</template>

<script>
import sixD from '../../global/sixD'
export default {
  components:{
       sixD
  },
  props: {
  },
}
</script>

<style >
.Process-height{
    height: 130vh;
}
</style>