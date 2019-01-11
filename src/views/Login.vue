<template>
  <div>
    <h1 class="text-center">Login</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  components: {
    LoginForm
  }
}
</script>

<style scoped>
 h1 {
   margin-bottom: 50px; 
 }
</style>
