<template>
  <div>
    <h1 class="text-center">Create Expense</h1>
    <expense-form :submitExpense="submitExpense"></expense-form>
  </div>
</template>

<script>
import ExpenseForm from "../components/ExpenseForm";
export default {
  components: {
    ExpenseForm
  },
  methods: {
    submitExpense(expense) {
      this.$store.dispatch("addExpense", expense);
    }
  }
}
</script>

<style scoped>
 h1 {
   margin-bottom: 50px; 
 }
</style>

