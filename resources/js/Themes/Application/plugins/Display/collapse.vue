<template>
<div id="Collapse-Arrows">
  <div id="arrow-right" @click="eventEmitter('maxMenu')" class="arrow min-menu-els" ></div>
  <div id="arrow-left" @click="eventEmitter('minMenu')" class=" arrow max-menu-els " ></div>
</div>
</template>
<style >
    
</style>

<script>

export default {
  methods: {
     eventEmitter(event){
                   if (event=="maxMenu") {
					   this.$sidebarState.defaulToNew();
					   Event.$emit(event,event);
					   //this.$Checker.checkFunction(event);
				   }else if(event=="minMenu"){
					   Event.$emit(event,event);
					   this.$sidebarState.newToDefault();
					   //this.$Checker.checkFunction(event);
				   }
	 }
  },
  created () {
  },
    
}
</script>

<style >
    .arrow{
	cursor: pointer;
	position: absolute;
	top: 50%;
	margin-top: -35px;
	width: 0;
	height: 0;
	border-style: solid;
	
}

#arrow-left{
	border-width: 20px 30px 20px 0;
	border-color: transparent #fff transparent transparent; 
	left: 20vh;
	margin-right: 30px;
}

#arrow-right{
	border-width: 20px 0px 20px 30px; 
	border-color: transparent transparent transparent #fff; 
	left: 6vh;
    margin-left: 30px;}
</style>