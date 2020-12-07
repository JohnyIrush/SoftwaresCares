<template>
    <div id="header" class="header-height bg-color-dark">
        <div class="row justify-content-center">
            <div class="col-2">
              <mainSidebarCollapseButton></mainSidebarCollapseButton>
            </div>
            <div class="col-9">
                 <!--<topmenu></topmenu>--> 
                 <navbar></navbar>
            </div>
        </div>
    </div>
</template>

<script>
//import topmenu from './menus/horizontal-top-menu'
import navbar from "../../Web/widgets/menus/navbar"
import mainSidebarCollapseButton from "./global/collapseButton";
export default {
    components:{
        //topmenu
        navbar,
        mainSidebarCollapseButton
    }
}
</script>

<style>
    
</style>