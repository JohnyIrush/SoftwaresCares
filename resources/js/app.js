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

import routes from './routes.js';

import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
});



Vue.component('uploader', require('./Plugins/Library/Uploader/widgets/uploader.vue').default); //File Uploader
Vue.component('fileactions', require('./Plugins/Library/Media/widgets/fileActions.vue').default); //File management actions (Delete, Rename etc)
Vue.component('diskcapacity', require('./Plugins/Library/Media/widgets/diskcapacity.vue').default); //Disk Levels

//import Plugin classes
import Request from './Plugins/common/Request' //send http requests
Vue.mixin(Request); //compile commonjs

import level from './Plugins/common/level' //show levels eg(disk used, free disk)
Vue.mixin(level); //compile level class

import Swal from "vue-sweetalert2"; //Sweet alerts
Vue.use(Swal);



const app = new Vue({
    router,
    store: store,
    el: '#app',
});
