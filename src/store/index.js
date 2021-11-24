import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    username: "",
    pass: "",
    auth: false,
  },
  getters: {
    USERNAME: (state) => {
      return state.username;
    },
    AUTH: (state) => {
      return state.auth;
    },
    PASS: (state) => {
      return state.pass;
    },
  },
  setters: {
    USERNAME: (state, payload) => {
      state.username = payload;
    },
    AUTH: (state, payload) => {
      state.auth = payload;
    },
    PASS: (state, payload) => {
      state.pass = payload;
    },
  },
  mutations: {
    SET_USERNAME: (state, payload) => {
      state.username = payload;
    },
    SET_AUTH: (state, payload) => {
      state.auth = payload;
    },
    SET_PASS: (state, payload) => {
      state.pass = payload;
    },
  },
  actions: {
    SET_USERNAME: async (context, payload) => {
      context.commit("SET_NAME", payload);
    },

    SET_PASS: async (context, payload) => {
      context.commit("SET_PASS", payload);
    },

    SET_AUTH: async (context, payload) => {
      context.commit("SET_AUTH", payload);
    },
  },
});
