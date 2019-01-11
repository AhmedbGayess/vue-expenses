<template>
  <div>
    <form @submit="login">
      <div class="form-group row">
        <label for="email" class="col-sm-2">Email</label>
        <div class="col-sm-10">
          <input type="email" v-model="email" id="email" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-2">Password</label>
        <div class="col-sm-10">
          <input type="password" v-model="password" id="password" class="form-control">
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-primary text-center">Login</button>
      </div>
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
    login(e) {
      e.preventDefault();

      const userData = {
        email: this.email,
        password: this.password
      };

      console.log(userData);
    }
  }
};
</script>

<style scoped>
button {
  width: 40%;
}
</style>


