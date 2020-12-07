<template>
    <div id="Web" class="bg-color-white .container-fluid responsive-page">
      <div class="row ">
        <div class="col-12">
         <WebHeader></WebHeader>
        </div>
      </div>
      <div class="row ">
        <div class="col-12">
             <!--<HomePage ></HomePage>-->
             <router-view ></router-view>
             <mainCollapsibleSidebar></mainCollapsibleSidebar>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <WebFooter></WebFooter>
        </div>
      </div>
      <!--<router-view></router-view>-->
    </div>
</template>

<script>
import WebHeader from './widgets/Header';
import WebFooter from './widgets/Footer';
import HomePage from './pages/home'
import mainCollapsibleSidebar from "../Application/widgets/global/collapseSideBar"
export default {
    components:{
       WebHeader,
       WebFooter,
       HomePage,
       mainCollapsibleSidebar
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