<template>
    <div class="row justify-content-center mt-3 mb-3 card bg-color-dark sixD-frame-height">
     <div class="col-12">
      <div class="row justify-content-around" >
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-primary" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-primary">Discover</h4>
       </li>
      </nav>
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-white" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-white">Define</h4>
       </li>
      </nav>
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-secondary" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-secondary">Design</h4>
       </li>
      </nav>
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-success" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-success">Develop</h4>
       </li>
      </nav>
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-info" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-info">Deploy</h4>
       </li>
      </nav>
      <nav class="col nav flex-column">
       <li class="spinner-border nav-item process-spinners  text-danger" role="status">
         <span class="sr-only">Loading...</span>
       </li>
       <li class="nav-item">
         <h4 class="text-danger">Deliver</h4>
       </li>
      </nav>
      </div>
     </div>
    </div> 
</template>



<script>
export default {
  props: {
  },
  props: {
  },
    
}
</script>

<style >
/**Frame Height*/
.sixD-frame-height{
   height: 30vh; 
}  

/**spinners dimensions*/
.process-spinners{
  width: 5rem; 
  height: 5rem;
}
</style>