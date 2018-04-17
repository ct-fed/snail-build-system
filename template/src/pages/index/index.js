import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import fastclick from 'fastclick';
{{#router}}
import VueRouter from 'vue-router';
import router from '../../router/routerInstance';
Vue.use(VueRouter);
{{/router}}

fastclick.attach(document.body);

Vue.config.errorHandler = config.errorHandler || function (err, vm) {
  console.log('----------------', err);
};
new Vue({
{{#store}}
store,
  {{/store}}
  {{#router}}
  router,
    {{/router}}
    template: '<App/>',
      components: {App}
  }).$mount('#app');
};
