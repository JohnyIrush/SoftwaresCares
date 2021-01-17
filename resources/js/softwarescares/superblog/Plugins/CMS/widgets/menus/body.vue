<template>
    <div id="body" class="body-height bg-color-darkblue card hide-x-overflow overflow-scroll" >
      <div class="row justify-content-center">
        <div class="col-12">
           <cmsmenu></cmsmenu>
        </div>
      </div>
    </div>
</template>

<script>
//import CmsMenu from './cms-menu.vue'
import cmsmenu from './cms-tools'
export default {
    components:{
      cmsmenu
    },
  Menuethods: {
  },
  created () {
  },
    
}
</script>

<style>
    
</style>