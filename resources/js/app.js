require('./bootstrap');

window.Vue = require('vue');


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
import AppDisplay from './Themes/Application/plugins/Display/Display'
Vue.prototype.$Display = new AppDisplay();


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



import Swal from "vue-sweetalert2"; //Sweet alerts
Vue.use(Swal);

/**Powered By SoftwaresCares Technologies**/
//require('./bootstrap');

//window.Vue = require('vue');


//Media Library widgets
Vue.component('uploader', require('./softwarescares/superblog/Plugins/Library/Uploader/widgets/uploader.vue').default); //File Uploader
Vue.component('fileactions', require('./softwarescares/superblog/Plugins/Library/Media/widgets/fileActions.vue').default); //File management actions (Delete, Rename etc)
Vue.component('diskcapacity', require('./softwarescares/superblog/Plugins/Library/Media/widgets/diskcapacity.vue').default); //Disk Levels

//Content Management System widgets
Vue.component('cms', require('./softwarescares/superblog/Plugins/CMS/cms.vue').default); //CMS Dashboard

//CMS Editor imports
Vue.component('editor', require('./softwarescares/superblog/Plugins/Editor/TextEditor/Editor.vue').default); //Rich text editor

//cms Display plugin imports
Vue.component('display', require('./softwarescares/superblog/Plugins/Display/display.vue').default); //Rich text editor
Vue.component('postview', require('./softwarescares/superblog/Plugins/Display/widgets/postview.vue').default); //Posts View


//import Plugin classes
import Request from './softwarescares/superblog/Plugins/common/Request' //send http requests
Vue.mixin(Request); //compile commonjs

import level from './softwarescares/superblog/Plugins/common/level' //show levels eg(disk used, free disk)
Vue.mixin(level); //compile level class

//import Swal from "vue-sweetalert2"; //Sweet alerts
//Vue.use(Swal);

//Event bus
//var Event = new Vue();
//window.Event = Event;

//Rich Text Editor Imports
import Editor from './softwarescares/superblog/Plugins/Editor/TextEditor/Editor'
Vue.prototype.$Editor = new Editor();

//Media Uploader

import Uploader from './softwarescares/superblog/Plugins/Editor/TextEditor/widgets/MediaUpload/Uploader';
Vue.prototype.$Uploader = new Uploader();

//chart app event bus
Vue.prototype.EventBus = new Vue();

//CMS Plugin imports
import Display from './softwarescares/superblog/Plugins/CMS/Drivers/Display.js'
Vue.mixin(Display); //compile Display

//CMS Post Plugin imports
import Post from './softwarescares/superblog/Plugins/CMS/Posts/Post'
Vue.prototype.$Post = new Post();

//Post Display Plugin
import PostDisplay from './softwarescares/superblog/Plugins/Display/PostDisplay';
Vue.prototype.$PostDisplay = new PostDisplay();


//Vuex import
import {store} from './softwarescares/superblog/Plugins/store'

const app = new Vue({
    router,
    store: store,
    el: '#app',
});

/**Powered By SoftwaresCares Technologies**/