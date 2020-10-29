require('./bootstrap');

window.Vue = require('vue');

import {store} from './store.js'

Vue.component('Example', require('./components/Example.vue').default);
Vue.component('Productone', require('./components/Productone.vue').default);
Vue.component('Producttwo', require('./components/Producttwo.vue').default);

/**
 * Application componetns
 * The SoftwaresCares Admin 
 * control View
 * */

Vue.component('Application', require('./Themes/Application/Application.vue').default);



const app = new Vue({
    store: store,
    el: '#app',
});



