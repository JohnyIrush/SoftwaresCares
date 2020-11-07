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

// Import Application Theme  plugin classes
/**
 * Manages all the elements
 * and components display
 *  functionality
*/
import Display from './Themes/Application/plugins/Display/Display'
Vue.prototype.$Display = new Display();


//Events
var Event = new Vue();
window.Event = Event;

//Check if functions are working
import Checker from './Themes/Application/plugins/Display/Checker'
Vue.prototype.$Checker = new Checker();


//SoftwaresCares Web imports
Vue.component('Web', require('./Themes/Web/Web.vue').default);

//import routes from './routes.js';

//import VueRouter from "vue-router";
//Vue.use(VueRouter);
//const router = new VueRouter({
//    routes,
//});


const app = new Vue({
    //router,
    store: store,
    el: '#app',
});



