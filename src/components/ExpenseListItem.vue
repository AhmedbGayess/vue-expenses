<template>
  <div class="list-group-item list-group-item-action">
    <router-link :to="link">
      <p>
        <strong>{{expense.description}}</strong>
      </p>
      <p>{{expense.amount}}</p>
      <p>{{date}}</p>
    </router-link>
      <button class="btn btn-danger" @click="deleteExpense">Delete</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    expense: {
      type: Object,
      required: true
    }
  },
  computed: {
    date() {
      return moment(this.expense.date).format("YYYY/MM/DD");
    },
    link() {
      return `/edit_expense/${this.expense._id}`;
    }
  },
  methods: {
    deleteExpense() {
      this.$store.dispatch("removeExpense", this.expense._id)
    }
  }
};
</script>

<style scoped>
</style>
