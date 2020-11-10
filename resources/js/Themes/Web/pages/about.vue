<template>
    <div class="container-fluid">
       <!--Home page Hero image section-->
       <section>
         <div id="home-hero" class="row bg-color-white">
            <div class="col-12">
                <AboutCarousel></AboutCarousel>
            </div> 
         </div>
       </section>
       <section>
           <div class="row">
            <div class="col-12">
               <About></About>
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

import AboutCarousel from '../widgets/sections/about/AboutCarousel'
import About from '../widgets/sections/about/About'


export default {
  methods: {

  },
    components:{
        AboutCarousel,
        About
    }

}
</script>

<style>
    
</style>