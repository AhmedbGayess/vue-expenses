<template>
  <div>
    <form @submit="loginUser">
      <div class="form-group row">
        <label for="email" class="col-sm-2">Email</label>
        <div class="col-sm-10">
          <input type="email" v-model="email" id="email" class="form-control">
          <div v-if="errors.email" class="invalid">
            <small>{{errors.email}}</small>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-2">Password</label>
        <div class="col-sm-10">
          <input type="password" v-model="password" id="password" class="form-control">
          <div v-if="errors.password" class="invalid">
            <small>{{errors.password}}</small>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary text-center mb-5">Login</button>
      </div>
      <router-link to="create_user">
        <p class="text-center">Create Account</p>
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser(e) {
      e.preventDefault();

      const userData = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("login", userData);
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


