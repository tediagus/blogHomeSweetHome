import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('capitalize', (value) => {
  if (!value) return '';
  return value.toString().charAt(0).toUpperCase() + value.toString().slice(1);
});

Vue.filter('truncate', (value, max) => {
  if (!max || value.length <= max) return value;

  return `${value.toString().substring(0, max)}...`;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
