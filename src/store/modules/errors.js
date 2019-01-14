export default {
    state: {
        errors: {}
    },
    mutations: {
        SET_ERRORS(state, errors) {
            state.errors = errors;
        },
        CLEAR_ERRORS(state) {
            state.errors = {};
        }
    },
    getters: {
      errors(state) {
        return state.errors;
      }
    }
};
