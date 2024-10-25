import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createStore } from 'vuex';
import { mlb_players } from './data/mlb_players';

const store = createStore({
  state() {
    return {
      isLoading: false,
      mlb_players: [],
      count: 0,
      color: [209, 97, 97],
      num: 1,
      arr: [1, 2, 3, 4, 5],
      person: {
        id: 1,
        name: 'John Doe',
        age: 25,
      },
      isRich: false,
      users: [
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Doe', age: 24 },
        { id: 3, name: 'John Smith', age: 30 },
        { id: 4, name: 'Jane Smith', age: 28 },
        { id: 5, name: 'John Brown', age: 35 },
        { id: 6, name: 'Jane Brown', age: 45 },
      ],
    };
  },
  getters: {
    usersOlderThan26: (state) => {
      return state.users.filter((user) => user.age > 26);
    },
    numberOfUsersOlderThan26: (state, getters) => {
      return getters.usersOlderThan26.length;
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.isLoading = loading;
    },
    increment(state) {
      state.count++;
    },
    randomColor(state) {
      state.color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
    },
    multiply(state, data) {
      state.num *= data;
    },
    addNum(state) {
      state.num++;
    },
    addArr(state) {
      state.arr.push(state.arr.length + 1);
    },
    loadMLBplayers(state, payloads) {
      state.mlb_players = payloads.mlb_players;
    },
  },
  actions: {
    fetchMLBplayers({ commit }) {
      commit('setLoading', true);
      setTimeout(() => {
        commit('loadMLBplayers', { mlb_players: mlb_players });
        commit('setLoading', false);
      }, 5000);
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');

// createApp(App).mount('#app')
