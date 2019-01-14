<template>
  <div>
    <button class="btn btn-success mb-5" @click="addExpense">+Add Expense</button>
    <div class="list-group">
      <div v-if="expenses.length > 0">
        <div class="list-group-item list-group-item-action">
          <h3>Expenses</h3>
        </div>
        <expense-list-item v-for="expense in expenses" :key="expense._id" :expense="expense"></expense-list-item>
      </div>

      <div v-else class="card">
        <div class="card-body text-center">
          <i>No expenses saved</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExpenseListItem from "./ExpenseListItem";
export default {
  methods: {
    addExpense() {
      this.$router.push("/create_expense");
    }
  },
  created() {
    this.$store.dispatch("setExpenses");
  },
  components: {
    ExpenseListItem
  },
  computed: {
    expenses() {
      return this.$store.getters.expenses;
    }
  }
};
</script>

<style scoped>
</style>
