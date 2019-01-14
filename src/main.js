import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import setAuthToken from "./services/setAuthToken";
import jwt_decode from "jwt-decode";

Vue.config.productionTip = false;

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.commit("SET_CURRENT_USER", decoded);

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
      store.dispatch("logout");
      router.push("/");
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
console.log(store)
