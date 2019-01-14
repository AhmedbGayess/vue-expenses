import axios from "../../services/Api";
import router from "../../router";

export default {
    state: {
        expenses: []
    },
    mutations: {
        SET_EXPENSES(state, expenses) {
            state.expenses = expenses;
        },
        ADD_EXPENSE(state, expense) {
            state.expenses = [...state.expenses, expense];
            router.push("/dashboard");
        },
        REMOVE_EXPENSE(state, id) {
            state.expenses = state.expenses.filter(
                expense => expense._id !== id
            );
        },
        UPDATE_EXPENSE(state, expense) {
            let expenseToUpdate = state.expenses.find(
                exp => exp.id === expense.id
            );
            if (expenseToUpdate) {
                expenseToUpdate = expense;
            }
            router.push("/dashboard");
        }
    },
    actions: {
        setExpenses({ commit }) {
            axios
                .get("expenses")
                .then(res => {
                    commit("SET_EXPENSES", res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        addExpense({ commit }, expense) {
            axios
                .post("expenses", expense)
                .then(expense => {
                    commit("ADD_EXPENSE", expense);
                })
                .catch(err => {
                    commit("SET_ERRORS", err.response.data);
                });
        },
        removeExpense({ commit }, id) {
            axios
                .delete(`expenses/${id}`)
                .then(() => {
                    commit("REMOVE_EXPENSE", id);
                })
                .catch(err => console.log(err));
        },
        editExpense({ commit }, { id, expense }) {
            axios
                .patch(`expenses/${id}`, expense)
                .then(expense => {
                    commit("UPDATE_EXPENSE", expense);
                })
                .catch(err => {
                    commit("SET_ERRORS", err.response.data);
                });
        }
    },
    getters: {
        expenses(state) {
            return state.expenses;
        }
    }
};
