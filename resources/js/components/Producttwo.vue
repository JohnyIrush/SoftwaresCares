<template>
    <div id="productone">
        <h1 class="tester display-4" >Product list Two</h1>
        <li v-for="(product, index) in saleProducts" :key="index">
         <span class="name">{{product.name}}</span>
         <span class="price">{{product.price}}</span>
        </li>
    </div>
</template>


<script>
export default {
 
  methods: {
  },
  computed: {
      products(){
          return this.$store.state.products
      },
      saleProducts(){
          var saleProducts = this.$store.state.products.map(product=>{
              return {
                  name: '**' + product.name + '**',
                  price: product.price/2,
              }
          });
          return saleProducts;
      }
  },
  created () {
  },
    
}
</script>

<style scoped>

</style>