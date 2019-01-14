import Vue from 'vue'
import Vuex from 'vuex'
import expenses from "./modules/expenses";
import auth from "./modules/auth";
import errors from "./modules/errors";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    expenses,
    auth,
    errors
  }
})
