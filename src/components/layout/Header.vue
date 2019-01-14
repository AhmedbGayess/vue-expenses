<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link to="/dashboard" class="navbar-brand">Vue Expenses</router-link>
      <a href="#" class="nav-link logout" v-show="loggedIn" @click="logoutUser">Logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logoutUser() {
      this.$store.commit("LOGOUT")
    }
  }
};
</script>


<style scoped>
nav {
  margin-bottom: 50px;
}

.logout {
  color: #fff;
}

.logout:hover {
  color: grey;
}
</style>

