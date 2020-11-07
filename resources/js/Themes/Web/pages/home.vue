<template>
    <div class="container">
       <!--Home page Hero image section-->
       <section>
         <div class="row">
            <div class="col-12">
                <HomeCarousel></HomeCarousel>
            </div> 
         </div>
       </section>
    </div>
</template>

<script>

import HomeCarousel from '../widgets/sections/HomeCarousel'
export default {
    components:{
        HomeCarousel,
    }

}
</script>

<style>
    
</style>