<template>
  <div>
    <div class="testMain">
      <p>hello, 什麼是Vuex?</p>
      <button @click="changeBgColor()">生成隨機顏色</button>
      <div>
        <span>{{ person }}</span>
      </div>
      <div>
        <button @click="addNum1()">+1</button>
        <p>
          累加1: {{ num }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();

  const num = computed(() => store.state.num);
  const person = computed(() => store.state.person);

  const bgColor = computed(() => {
    const colors = store.state.color;
    return `rgb(${colors.join(", ")})`
  })


  const changeBgColor = () => {
    store.commit('randomColor');
  }

  const addNum1 = () => {
    store.commit('addNum');
  }

</script>

<style scoped>

  p {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }

  .container {
    display: grid;
    justify-content: center;
    width: 400px;
  }

  .testMain {
    width: 70vw;
    height: 70vh;
    max-width: 70%;
    display: grid;
    place-items: center;
    /* background-color: red; */
    background-color: v-bind(bgColor);
  }

</style>