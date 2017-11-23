import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '@/components/HomeView';
import AboutView from '@/components/AboutView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'Aboud',
      component: AboutView,
    },
  ],
});
