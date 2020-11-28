<template>
    <div class=".container-fluid">
       <!--Home page Hero image section-->
       <section>
         <div id="home-hero" class="row bg-color-white ">
            <div class="col-12">
                <HomeCarousel></HomeCarousel>
            </div> 
         </div>
       </section>
       <section>
           <div class="row ">
            <div class="col-12">
               <About></About>
            </div>
           </div>
       </section>
       <section>
           <div class="row ">
            <div class="col-12">
               <Clients></Clients>
            </div>
           </div>
       </section>
       <section>
           <div class="row mt-1  ">
            <div class="col-12">
               <Portfolio></Portfolio>
            </div>
           </div>
       </section>
       <section>
           <div class="row ">
            <div class="col-12">
               <Team></Team>
            </div>
           </div>
       </section>
       <section>
           <div class="row ">
            <div class="col-12">
               <PostCarousel></PostCarousel>
            </div>
           </div>
       </section>
    </div>
</template>

<script>

import HomeCarousel from '../widgets/sections/home/HomeCarousel'
import About from '../widgets/sections/home/About'
import Team from '../widgets/sections/home/Team'
import Portfolio from '../widgets/sections/home/Portfolio'
import PostCarousel from '../widgets/sections/home/PostCarousel'
import Clients from '../widgets/sections/home/Clients'

export default {
  methods: {
  },
    components:{
        HomeCarousel,
        About,
        Team,
        Portfolio,
        PostCarousel,
        Clients
    }

}
</script>

<style>
    
</style>