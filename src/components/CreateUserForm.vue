<template>
  <div>
    <form @submit="createUser">
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input type="text" v-model="firstname" id="firstname" class="form-control">
        <label for="lastname">Last Name</label>
        <input type="text" v-model="lastname" id="lastname" class="form-control">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" class="form-control">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control">
        <div class="text-center">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
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

      console.log(userData);
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}

button {
  width: 40%;
}
</style>



