<template>
  <div>
    <div class="testMain">
      <p>hello, song</p>
      <button @click="changeColor2()">生成隨機顏色</button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore();

  const bgColor = computed(() => {
    const colors = store.state.color;
    return `rgb(${colors.join(", ")})`
  })


  const changeColor2 = () => {
    store.commit('randomColor');
  }

</script>

<style scoped>

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