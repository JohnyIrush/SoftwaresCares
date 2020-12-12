<template>
    <div id="web-header" class="row web-header-size bg-color-dark align-items-center">
        <div class="col-1">
        </div>
        <div class="col-1  align-self-center">
        </div>
        <div class="col-6">
            <Navbar></Navbar> 
        </div>
        <div class="col-4">
        </div>
    </div>
</template>

<script>
import Navbar from './menus/navbar'
export default {
  props: {
  },
    components:{
        Navbar,
    }
}
</script>

<style>
    
</style>