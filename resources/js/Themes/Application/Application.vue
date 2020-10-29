<template>
    <div id="Application" class="Application-height .container-fluid bg-color-white">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './widgets/header';
import Footer from './widgets/footer';
import Body from './widgets/body';
export default {
    components:{
        Header,
        Footer,
        Body
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