<template>
  <div>
    <h1 class="text-center">Edit Expense</h1>
    <expense-form></expense-form>
  </div>
</template>

<script>
import ExpenseForm from "../components/ExpenseForm";
export default {
  components: {
    ExpenseForm
  }
}
</script>

<style scoped>
 h1 {
   margin-bottom: 50px; 
 }
</style>