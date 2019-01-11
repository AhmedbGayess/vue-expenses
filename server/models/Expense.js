const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  note: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

const Expense = mongoose.model("expenses", ExpenseSchema);

module.exports = Expense;