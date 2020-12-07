<template>
    <div class=".container-fluid">
       <section>
         <div  class="row bg-color-white">
            <div class="col-12">
                <contactCarousel></contactCarousel>
            </div> 
         </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
              <SocialContact></SocialContact>
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
             <!--<YouTube></YouTube>-->
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
                <contactForm></contactForm>
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">

            </div>
           </div>
       </section>
    </div>
</template>

<script>

import contactForm from '../widgets/sections/contact/ContactForm'
import contactCarousel from '../widgets/sections/contact/ContactCarousel'
import SocialContact from "../widgets/sections/contact/SocialContact";
//import YouTube from "../widgets/global/YouTube"



export default {
    components:{
       contactForm,
       contactCarousel,
       SocialContact,
       //YouTube
    },

  methods: {

  },
  mounted(){

  }

}
</script>

<style>
    
</style>