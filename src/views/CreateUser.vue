<template>
  <div>
    <h1 class="text-center">Create User</h1>
    <create-user-from></create-user-from>
  </div>
</template>

<script>
import CreateUserFrom from "../components/CreateUserForm";
export default {
  components: {
    CreateUserFrom
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 50px;
}
</style>
