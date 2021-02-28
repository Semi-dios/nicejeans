import Vue from 'vue';
import Router from 'vue-router';



/* Web */
import Welcome from '../js/components/views/web/Welcome.vue';
import Login from '../js/components/views/web/Login.vue';
import Register from '../js/components/views/web/Register.vue';
import About from '../js/components/views/web/About.vue';
import Contact from '../js/components/views/web/Contact.vue';
import Forgot from '../js/components/views/web/Forgot.vue';
import Reset from '../js/components/views/web/ResetPassword.vue';
import NotFound from '../js/components/partials/404.vue';


/* Dashboard */
import Product from '../js/components/views/dashboard/Product.vue';
Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component:Welcome,
        meta: {
            header: 1
        }
    },
    {
        path: '/login',
        name: 'login',
        component:Login,
        meta: {
            header: 2
        }
    },
    {
        path: '/forgotPassword',
        name: 'forgot',
        component:Forgot,
        meta: {
            header: 2
        }
    },
    {
        path: '/resetPassword',
        name: 'reset',
        component:Reset,
        meta: {
            header: 2
        }
    },
    {
        path: '/register',
        name: 'register',
        component:Register
    },
    {
        path: '/contact',
        name: 'contact',
        component:Contact,
        meta: {
            header: 1
        }
    },
    {
        path: '/about',
        name: 'about',
        component:About,
        meta: {
            header: 1
        }
    },
    {
        path: '/404',
        name: 'notfound',
        component:NotFound,

    },
    {
        path: '/adminProduct',
        name: 'product',
        component:Product
    }
];

const router = new Router({
    routes:routes,
    linkActiveClass: 'active'
});


export default router;
