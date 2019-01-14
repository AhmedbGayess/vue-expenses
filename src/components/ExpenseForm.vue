<template>
  <div>
    <form @submit="submit">
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" v-model="description" id="description" class="form-control">
        <label for="amount">Amount</label>
        <input type="number" v-model="amount" id="amount" class="form-control">
        <label for="date">Date</label>
        <input type="date" v-model="date" id="date" class="form-control">
        <label for="note">Note (Optional)</label>
        <textarea id="note" v-model="note" class="form-control"></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: this.expense.description || "",
      amount: this.expense.amount || 0,
      date: this.expense.date || "",
      note: this.expense.note || ""
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();

      const expense = {
        description: this.description,
        amount: this.amount,
        date: this.date,
        note: this.note
      };

      this.submitExpense(expense);
    }
  },
  props: {
    submitExpense: {
      type: Function,
      required: true
    },
    expense: {
      type: Object
    }
  }
};
</script>

<style scoped>
input {
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
}
</style>


