<template>
    <div id="productone">
        <h1 class="tester display-4" >Product list One</h1>
        <li v-for="(product, index) in saleProducts" :key="index">
         <span class="name">{{product.name}}</span>
         <span class="price">{{product.price}}</span>
        </li>
        <button @click="reducePrice(4)" type="button" class="btn btn-outline-primary">Reduce Price</button>
    </div>
</template>


<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default { 
  watch: {
  },
 
  methods: {
      /**
       * without mapActions
      */
        ...mapActions([
               'reducePrice'
           ])
      //reducePrice(amount){
         /**
           * way with mutations but with actions
            this.$store.commit('reducePrice');
          */
          //this.$store.dispatch('reducePrice',amount);
          /**
           * way with mutations but without actions
            this.$store.commit('reducePrice');
          */
         /**
          *Way without mutations
          this.$store.state.products.forEach(product => {
              product.price -=1;
          }); */
      //}
  },
  computed: {
      products(){
          return this.$store.state.products
      },
        ...mapGetters([
              'saleProducts', 
           ])
      /*Without mapGetters*/
     // saleProducts(){
          /**
           * Way with getters without mapGetters
           * return this.$store.getters.saleProducts
           */

          /**
           * way without getters
          var saleProducts = this.$store.state.products.map(product=>{
              return {
                  name: '**' + product.name + '**',
                  price: product.price/2,
              }
          });
          return saleProducts;
          */
    //  }
  },
  created () {
  },
    
}
</script>

<style scoped>

</style>