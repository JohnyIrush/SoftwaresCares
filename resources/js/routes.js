import about from "./Themes/Web/pages/about.vue";
import services from "./Themes/Web/pages/services.vue";
import contact from "./Themes/Web/pages/contact.vue";
import privacypolicy from "./Themes/Web/pages/privacypolicy.vue";


export default [
    {
        path: '/about',
        component: about,
    },
    {
        path: '/services',
        component: services,
    },
    {
        path: 'contact',
        component: contact
    },
    {
        path: '/privacypolicy',
        component:privacypolicy,
    }

];