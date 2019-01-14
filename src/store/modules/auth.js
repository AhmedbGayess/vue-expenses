import axios from "../../services/Api";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../services/setAuthToken";
import router from "../../router";

export default {
    state: {
        isAuthenticated: false,
        user: {},
        errors: {}
    },
    mutations: {
        SET_CURRENT_USER(state, user) {
            state.user = user;
            state.isAuthenticated = true;
            router.push("/dashboard");
        },
        LOGOUT(state) {
            localStorage.removeItem("jwtToken");
            setAuthToken(false);
            state.user = {};
            state.isAuthenticated = false;
            router.push("/");
        }
    },
    actions: {
        login({ commit }, userData) {
            axios
                .post("users/login", userData)
                .then(res => {
                    const { token } = res.data;
                    localStorage.setItem("jwtToken", token);
                    setAuthToken(token);
                    const decoded = jwt_decode(token);
                    commit("SET_CURRENT_USER", decoded);
                })
                .catch(err => {
                    commit("SET_ERRORS", err.response.data);
                });
        },
        registerUser({ commit }, userData) {
            axios
                .post("users/register", userData)
                .then(res => {
                    router.push("/");
                })
                .catch(err => {
                    commit("SET_ERRORS", err.response.data);
                });
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isAuthenticated;
        },
        user(state) {
            const { firstname, lastname } = state.user;
            return `${firstname} ${lastname}`;
        }
    }
};
