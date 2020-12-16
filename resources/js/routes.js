//SoftwaresCares Web Pages
import home from "./Themes/Web/pages/home.vue";
import about from "./Themes/Web/pages/about.vue";
import services from "./Themes/Web/pages/services.vue";
import contact from "./Themes/Web/pages/contact.vue";
import privacypolicy from "./Themes/Web/pages/privacypolicy.vue";

//Technology Pages
import Technology from "./Themes/Technology/cyber/Technology"
import Windows from "./Themes/Technology/cyber/Windows";
import Android from "./Themes/Technology/cyber/Android";
import Ios from "./Themes/Technology/cyber/Ios";
import Linux from "./Themes/Technology/cyber/Linux";
import Macos from "./Themes/Technology/cyber/Macos";


export default [
    {
        path: '/',
        component: home,
    },
    {
        path: '/SoftwaresCares/home',
        component: home,
    },
    {
        path: '/SoftwaresCares/about',
        component: about,
    },
    {
        path: '/SoftwaresCares/services',
        component: services,
    },
    {
        path: '/SoftwaresCares/contact',
        component: contact
    },
    {
        path: '/SoftwaresCares/privacypolicy',
        component:privacypolicy,
    }
    ,
    {
        path: '/SoftwaresCares/technology',
        component: Technology,
    },
    {
        path: '/SoftwaresCares/technology/windows',
        component:  Windows,
    },
    {
        path: '/SoftwaresCares/technology/android',
        component: Android,
    },
    {
        path: '/SoftwaresCares/technology/ios',
        component: Ios,
    },
    {
        path: '/SoftwaresCares/technology/linux',
        component: Linux,
    },
    ,
    {
        path: '/SoftwaresCares/technology/macos',
        component: Macos,
    },

];