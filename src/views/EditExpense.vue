<template>
  <div>
    <h1 class="text-center">Edit Expense</h1>
    <expense-form :submitExpense="submitExpense" :expense="expense"></expense-form>
  </div>
</template>

<script>
import ExpenseForm from "../components/ExpenseForm";
export default {
  name: "EditExpense",
  components: {
    ExpenseForm
  },
  methods: {
    submitExpense(expense) {
      this.$store.dispatch("editExpense", {id: this.expense._id, expense});
    }
  },
  computed: {
    expense() {
      return this.$store.getters.expenses.find(
        expense => expense._id === this.$route.params.id
      );
    }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 50px;
}
</style>