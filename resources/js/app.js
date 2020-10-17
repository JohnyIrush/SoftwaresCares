require('./bootstrap');

window.Vue = require('vue');



Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import vuetify from './plugins/vuetify.js'


const app = new Vue({
    vuetify: vuetify,
    el: '#app',
});
