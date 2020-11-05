<template>
<div id="min-menu" class="m-0 bg-color-red min-menu-dimensions">
 <collapsearrows></collapsearrows>
</div>
</template>

<style >
    
</style>

<script>
import collapsearrows from '../../plugins/Display/collapse'
export default {
    components:{
        collapsearrows
    },
    methods: {
        
    },
    mounted() {
        this.$Display.hidePluginFeatures('#arrow-left');
    },
}
</script>