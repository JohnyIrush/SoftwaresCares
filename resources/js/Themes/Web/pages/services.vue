<template>
    <div class="container-fluid">
       <!--Home page Hero image section-->
       <section>
         <div id="home-hero" class="row bg-color-white">
            <div class="col-12">
                <ServicesCarousel></ServicesCarousel>
            </div> 
         </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
               <Services></Services>
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
            </div>
           </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">

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

import ServicesCarousel from '../widgets/sections/services/ServicesCarousel'
import Services from '../widgets/sections/services/Services'


export default {
  methods: {
      
  },
    components:{
        ServicesCarousel,
        Services,

    }

}
</script>

<style>
    
</style>