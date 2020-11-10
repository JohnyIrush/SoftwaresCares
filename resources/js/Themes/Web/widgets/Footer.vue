<template>
    <div id="web-footer" class="web-footer-height bg-color-dark web-footer-pos">
        <div class="row justify-content-center">
          <div class="col-1  align-self-center">
            <div class="bg-color-red p-1">
              <Logo></Logo>
            </div>
          </div>
          <div class="col-6">
            
          </div>
          <div class="col-5"></div>
        </div>
        <div class="row justify-content-center">
           <div class="col-4">
             <div class="row">
               <div class="col-12">
                   <h1 class="text-white">Operating Systems</h1>
               </div>
             </div>
             <div class="row">
               <div class="col-12">
                 <ul class="nav flex-column">
                   <li class="nav-item">
                     <a class="nav-link active" href="#">Active</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div class="col-4">
             <div class="row">
               <div class="col-12">
                   <h1 class="text-white">Applications</h1>
               </div>
             </div>
             <div class="row">
               <div class="col-12">
                 <ul class="nav flex-column">
                   <li class="nav-item">
                     <a class="nav-link active" href="#">Active</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
           <div class="col-4">
             <div class="row">
               <div class="col-12">
                   <h1 class="text-white">Web Development</h1>
               </div>
             </div>
             <div class="row">
               <div class="col-12">
                 <ul class="nav flex-column">
                   <li class="nav-item">
                     <a class="nav-link active" href="#">Active</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item">
                     <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
        </div>
        <div class="row justify-content-center ">
          <div class="col-12 bottom-pos">
           <copyRight></copyRight>
          </div>
        </div>
    </div>
</template>

<script>

import copyRight from './global/copyRight'
import Logo from './global/logo'
export default {
  components:{
    copyRight,
    Logo
  },
  props: {
  },
  data () {
    return {
    }
  },
  watch: {
  },
    
}
</script>

<style>
    
</style>