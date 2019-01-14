const express = require("express");
const passport = require("passport");

const router = express.Router();

// Import Expense model and validation
const Expense = require("../models/Expense");
const validateExpense = require("../validation/expenseValidation");

// Import User model
const User = require("../models/User");

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        // Validate expense
        const { error } = validateExpense(req.body);
        if (error) {
            const errors = {};
            error.details.forEach(
                err => (errors[err.context.key] = err.message)
            );
            return res.status(400).send(errors);
        }

        // Find user
        User.findById(req.user.id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({ user: "No user found" });
                }

                // Create new expense
                const newExpense = new Expense({
                    owner: req.user.id,
                    ...req.body
                });

                // Save expense
                return newExpense.save();
            })
            .then(expense => res.json(expense))
            .catch(err => console.log(err));
    }
);

// Get all expenses
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        // Get Expenses
        Expense.find({ owner: req.user.id })
            .then(expenses => {
                if (!expenses) {
                    return res.status(404).send("No expenses found");
                }
                res.json(expenses);
            })
            .catch(err => console.log(err));
    }
);

// Edit expense
router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        // Validate updates
        const { error } = validateExpense(req.body);
        if (error) {
            const errors = {};
            error.details.forEach(
                err => (errors[err.context.key] = err.message)
            );
            return res.status(400).send(errors);
        }

        // Find expense and update it
        Expense.findOneAndUpdate(
            { _id: req.params.id, owner: req.user.id },
            req.body,
            { new: true }
        )
            .then(expense => res.json(expense))
            .catch(err => res.status(404).send("No expense found"));
    }
);

// Delete Expense
router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Expense.findOneAndRemove({ _id: req.params.id, owner: req.user.id })
            .then(() => res.send("Deleted"))
            .catch(err => console.log(err));
    }
);

module.exports = router;
