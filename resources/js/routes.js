import home from "./Themes/Web/pages/home.vue";
import about from "./Themes/Web/pages/about.vue";
import services from "./Themes/Web/pages/services.vue";
import contact from "./Themes/Web/pages/contact.vue";
import privacypolicy from "./Themes/Web/pages/privacypolicy.vue";


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

];