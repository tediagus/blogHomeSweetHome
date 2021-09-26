import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateEvent from '@/views/admin/CreateEvent.vue';
import ListEvent from '@/views/admin/ListEvent.vue';
import Admin from '../views/Admin.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Admin,

  },
  {
    path: '/admin/create-event',
    name: 'admin-create-event',
    component: CreateEvent,
  },
  {
    path: '/admin/list-event',
    name: 'admin-list-event',
    component: ListEvent,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
/*
router.beforeEach((to) => {
 if (to.name === 'Admin') {
    // faire un controle
  }
});
*/
export default router;
