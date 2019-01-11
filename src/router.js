import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login.vue";
import CreateUser from "./views/CreateUser.vue";
import Dashboard from "./views/Dashboard.vue";
import CreateExpense from "./views/CreateExpense.vue";
import EditExpense from "./views/EditExpense.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: "Login",
      path: "/",
      component: Login
    },
    {
      name: "CreateUserPage",
      path: "/create_user",
      component: CreateUser
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      component: Dashboard
    },
    {
      name: "CreateExpensePage",
      path: "/create_expense",
      component: CreateExpense
    },
    {
      name: "EditExpensePage",
      path: "/edit_expense/:id",
      component: EditExpense
    }
  ],
  mode: "history"
})
