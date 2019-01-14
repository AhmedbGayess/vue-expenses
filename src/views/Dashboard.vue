<template>
  <div>
    <h2 class="text-center">Dashboard</h2>
    <h5 class="text-center mb-3">Welcome {{user}}</h5>
    <expense-list></expense-list>
  </div>
</template>

<script>
import ExpenseList from "../components/ExpensesList.vue";
export default {
  components: {
    ExpenseList
  },
  computed: {
    user() {
      return this.$store.getters.user
    }
  }
};
</script>
