import DashboardLayout from '../views/Layout/DashboardLayout.vue';
import AuthLayout from '../views/Pages/AuthLayout.vue';

import NotFound from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/dashboard',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Sales.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },
      {
        path: '/editprofile',
        name: 'editprofile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile/EditProfileForm.vue')
      },
      {
        path: '/maps',
        name: 'maps',
        component: () => import(/* webpackChunkName: "demo" */ '../views/GoogleMaps.vue')
      },
      {
        path: '/tables',
        name: 'tables',
        component: () => import(/* webpackChunkName: "demo" */ '../views/RegularTables.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Contact.vue'),
        meta: {
            header: 1
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/About.vue'),
        meta: {
            header: 1
        }
      },
      {
        path: '/',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Welcome.vue'),
        meta: {
            header: 1
        }
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
