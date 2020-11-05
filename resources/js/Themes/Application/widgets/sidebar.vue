<template>
     <div id="sidebar" class="sidebar-position body-height">
         <maxmenu  id="max-menu" class="max-menu-els" ></maxmenu>            
     </div>
</template>

<style >
    
</style>

<script>
//components imports
import maxmenu from './menus/max-sidebar-menu'


//classes imports
//States
import States from '../plugins/Display/states';


import Display from '../plugins/Display/Display';


export default {
  methods: {
      handleEvents(){
          Event.$on(event,(data)=>{
                
          })
      }
  },
    components:{
        maxmenu,
    },
mounted() {


 
},
    
}
</script>