import Vue from 'vue';
import Router from 'vue-router';



/* Web */
import Welcome from '../js/components/views/web/Welcome.vue';
import Login from '../js/components/views/web/Login.vue';


/* Dashboard */
import Product from '../js/components/views/dashboard/Product.vue';
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component:Welcome
    },
    {
        path: '/login',
        name: 'login',
        component:Login
    },
    {
        path: '/adminProduct',
        name: 'product',
        component:Product
    }
];

const router = new Router({
    routes:routes
});


export default router;
