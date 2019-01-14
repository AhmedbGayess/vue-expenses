const Joi = require("joi");

const validateExpense = (expense) => {
  const schema = {
    description: Joi.string().max(500).required().error(() => "Description is required"),
    amount: Joi.number().min(0).required().error(() => "Amount is required"),
    note: Joi.string().allow(""),
    date: Joi.date()
  }

  return Joi.validate(expense, schema, {abortEarly: false});
}

module.exports = validateExpense;