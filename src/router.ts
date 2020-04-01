import Vue from 'vue';
import Router from 'vue-router';
import Home from './veiws/Home.vue';
import ArtisanComponent from './components/artisan/artisanComponent.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/artisan/:id',
      name: 'artisan',
      props: true,
      component: ArtisanComponent,
    },
  ],
});
