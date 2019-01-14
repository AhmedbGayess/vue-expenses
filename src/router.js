import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue";
import CreateUser from "./views/CreateUser.vue";
import Dashboard from "./views/Dashboard.vue";
import CreateExpense from "./views/CreateExpense.vue";
import EditExpense from "./views/EditExpense.vue";

import store from "./store/store";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: "Login",
      path: "/",
      component: Login,
      beforeEnter(to, from, next) {
        if(!store.state.auth.isAuthenticated) {
          next();
        } else {
          next("/dashboard");
        }
      }
    },
    {
      name: "CreateUserPage",
      path: "/create_user",
      component: CreateUser,
      beforeEnter(to, from, next) {
        if(!store.state.auth.isAuthenticated) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if(store.state.auth.isAuthenticated) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      name: "CreateExpensePage",
      path: "/create_expense",
      component: CreateExpense,
      beforeEnter(to, from, next) {
        if(store.state.auth.isAuthenticated) {
          next();
        } else {
          next("/");
        }
      }
    },
    {
      name: "EditExpensePage",
      path: "/:id",
      component: EditExpense,
      beforeEnter(to, from, next) {
        if(store.state.auth.isAuthenticated) {
          next();
        } else {
          next("/");
        }
      }
    }
  ],
  mode: "history"
})

