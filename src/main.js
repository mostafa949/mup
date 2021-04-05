import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VScrollLock from 'v-scroll-lock';
import AOS from 'aos'
import 'aos/dist/aos.css'


library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VScrollLock);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
