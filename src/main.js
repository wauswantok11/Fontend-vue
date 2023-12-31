import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import axios from 'axios'
import VueAxios from 'vue-axios' 
// Vue.use(VueSweetalert2)
Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
Vue.use(router , router);
new Vue({
  router,
  store,
  vuetify, 
  render: (h) => h(App),
}).$mount("#app");

// router.replace('/login');