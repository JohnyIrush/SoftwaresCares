<template>
    <div id="web-header" class="row web-header-size bg-color-dark align-items-center">
        <div class="col-1">
          <mainCollapsibleSidebar></mainCollapsibleSidebar>
        </div>
        <div class="col-1  align-self-center">
            <div class="bg-color-red p-1">
             <Logo></Logo>
            </div>
        </div>
        <div class="col-6">
            <Navbar></Navbar> 
        </div>
        <div class="col-4">
            <Social></Social>
        </div>
    </div>
</template>

<script>
import Navbar from './menus/navbar'
import Logo from './global/logo'
import Social from './global/social'
import mainCollapsibleSidebar from "../../Application/widgets/global/collapseButton"
export default {
  props: {
  },
    components:{
        Navbar,
        Logo,
        Social,
        mainCollapsibleSidebar
    }
}
</script>

<style>
    
</style>