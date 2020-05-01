import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueCompositionApi from '@vue/composition-api';
import loadIcons from './utils/iconLoader';
loadIcons(Vue);

import './styles/index.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
