<template>
  <div class="col-12 mt-1  bg-color-darkblue card social-contact-height">
         <!--contact-->
           <div class="row ">
             <div class="col-12 rec-frame-height bg-color-red">
                 <h1 class="text-primary text-center">Follow Us</h1>
             </div>
           </div>
           <div class="row justify-content-end p-3 mt-3">
             <Social class="bg-color-dark"></Social>
           </div>
           <YouTube></YouTube>
         <!--contact-->                                     
  </div>
</template>

<script>

import Social from '../../global/social';
import YouTube from "../../global/YouTube";



export default {
    components:{
        Social,
        YouTube
    }

}
</script>

<style>
.social-contact-height{
    height: 140vh;
}

</style>