<template>
     <div id="sidebar" class="sidebar-position body-height">
         <minmenu  id="max-menu" class="max-menu-els" ></minmenu>       
     </div>
</template>

<style >
    
</style>

<script>
//components imports
//import maxmenu from './menus/max-sidebar-menu'
import minmenu from './menus/min-sidebar-menu'


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
        minmenu,
    },
mounted() {


 
},
    
}
</script>