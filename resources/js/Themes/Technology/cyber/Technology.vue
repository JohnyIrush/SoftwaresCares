<template>
    <div id="Web" class="bg-color-white .container-fluid responsive-page">
      <div class="row ">
        <div class="col-12">
         <Header></Header>
        </div>
      </div>
      <div class="row ">
        <div class="col-12">
             <router-view ></router-view>
             <mainCollapsibleSidebar></mainCollapsibleSidebar>
        </div>
      </div>
      <div class="row">
        <div class="col-12">

        </div>
      </div>
      <!--<router-view></router-view>-->
    </div>
</template>

<script>
import Header from './widgets/Header';
import mainCollapsibleSidebar from "../Application/widgets/global/collapseSideBar"
export default {
    components:{
       mainCollapsibleSidebar,
       Header
    },
  watch: {
  },
  data () {
    return {

    }
  },
  props: {
  },
  methods: {
  },
  mounted() {

  },
    
}
</script>

<style>
    
</style>