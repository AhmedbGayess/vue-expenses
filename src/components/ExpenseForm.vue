<template>
  <div>
    <form @submit="submit">
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" v-model="description" id="description" class="form-control">
        <div v-if="errors.description" class="invalid">
          <small>{{errors.description}}</small>
        </div>
      </div>
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" v-model="amount" id="amount" class="form-control">
        <div v-if="errors.amount" class="invalid">
          <small>{{errors.amount}}</small>
        </div>
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" v-model="date" id="date" class="form-control">
      </div>
      <div class="form-group">
        <label for="note">Note (Optional)</label>
        <textarea id="note" v-model="note" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
      amount: 0,
      date: "",
      note: ""
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
  },
  computed: {
    errors() {
      return this.$store.getters.errors;
    }
  },
  created() {
    if (this.expense) {
      this.description = this.expense.description;
      this.amount = this.expense.amount;
      this.date = this.expense.date;
      this.note = this.expense.note;
    }
    this.$store.commit("CLEAR_ERRORS");
  }
};
</script>

<style scoped>
button {
  margin-top: 20px;
}

.invalid {
  color: red;
  font-style: italic;
  margin-left: 3px;
}
</style>


