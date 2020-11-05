<template>
    <div id="Application" class="Application-height p-0 responsive-page .container-fluid bg-color-white">
       <div class="row">
         <div class="col">
            <Header></Header>
         </div>
       </div>
       <div class="row">
         <div class="col">
            <sidebar></sidebar>
         </div>
         <div class="col">
            <Body></Body>
         </div>
       </div>
       <div class="row">
        <div class="col">
          <Footer></Footer>
        </div>
       </div>
    </div>
</template>

<script>
import Header from './widgets/header';
import Footer from './widgets/footer';
import Body from './widgets/body';
import sidebar from './widgets/sidebar'
export default {
    components:{
        Header,
        Footer,
        Body,
        sidebar
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
    
}
</script>

<style>
    
</style>