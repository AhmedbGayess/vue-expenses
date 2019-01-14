<template>
  <div>
    <form @submit="createUser">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input type="text" v-model="firstname" id="firstname" class="form-control">
        <div v-if="errors.firstname" class="invalid"><small>{{errors.firstname}}</small></div>
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" v-model="lastname" id="lastname" class="form-control">
        <div v-if="errors.lastname" class="invalid"><small>{{errors.lastname}}</small></div>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" class="form-control">
        <div v-if="errors.email" class="invalid"><small>{{errors.email}}</small></div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control">
        <div v-if="errors.password" class="invalid"><small>{{errors.password}}</small></div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "../services/Api.js";
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  methods: {
    createUser(e) {
      e.preventDefault();

      const userData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("registerUser", userData);
    }
  },
  computed: {
    errors() {
      return this.$store.getters.errors;
    }
  },
  created() {
      this.$store.commit("CLEAR_ERRORS");
  }
};
</script>

<style scoped>
button {
  width: 40%;
}

.invalid {
  color: red;
  font-style: italic;
  margin-left: 3px;
}
</style>



