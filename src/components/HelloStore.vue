<template>
  <div>
    <div class="testMain">
      <p>hello, 什麼是Vuex?</p>
      <button @click="changeBgColor()">生成隨機顏色</button>
      <div>
        <span>{{ arr }}</span>
        <div>
          <button @click="addArr1()">追加元素</button>
        </div>
      </div>
      <div>
        <button @click="addNum1()">+1</button>
        <p>
          累加: {{ num }}
        </p>
      </div>
      <div>
        <input type="text" v-model="txt_value">
        <button @click="multiply1(txt_value)">*{{ txt_value }}</button>
        <p>
          {{ num }}
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
  const arr = computed(() => store.state.arr);

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

  const addArr1 = () => {
    store.commit('addArr');
  }

  const multiply1 = (data) => {
    store.commit('multiply', data);
  }

  const txt_value = ref(1);

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