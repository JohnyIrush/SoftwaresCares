<template>
  <div class="col-12 mt-1  services-height bg-color-darkblue card">
    <div class="row">
      <div class="col-12 rec-frame-height bg-color-red">
          <h1 class="text-primary">Services</h1>
      </div>
    </div>
   <sixD></sixD>
  <div class="row  mt-3 mb-3 justify-content-center">
      <div class="col-sm-7 services-height fixed-bg-img img-fluid">
           
      </div>
      <div class="col-sm-5">
       <div class="card bg-color-dark">
         <div class="card-body text-white">
          <ul class="list-group list-group-flush bg-color-dark">
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Cras justo odio</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Dapibus ac facilisis in</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Morbi leo risus</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Porta ac consectetur ac</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Vestibulum at eros</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Cras justo odio</li>
            <li class="list-group-item bg-color-dark"> <i class="fa fa-check fa-2x text-primary" aria-hidden="true"></i> Dapibus ac facilisis in</li>
          </ul>
         </div>
       </div>
      </div>
  </div>
  </div>  
</template>


<script>
export default {

}
</script>

<style>
.services-height{
    height: 100vh;
}

.fixed-bg-img{
  background-image: url("/Developement/Images/binary.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>