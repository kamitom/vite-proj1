import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
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
    };
  },
  mutations: {
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
    multiply(state) {
      state.num *= 2;
    },
    addNum(state) {
      state.num++;
    },
    addArr(state) {
      state.arr.push(state.arr.length + 1);
    },
  },
});

const app = createApp(App);

app.use(store);
app.mount('#app');

// createApp(App).mount('#app')
