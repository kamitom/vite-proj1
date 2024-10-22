import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      count: 0,
      color: [209, 97, 97],
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
  },
});

app.use(store);
app.mount('#app');

// createApp(App).mount('#app')
