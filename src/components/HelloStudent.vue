<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
  <div class="color9" :style="{ backgroundColor: randomColor }" @click="changeColor()">
    <button @click="changeColor(); toggleShowMe();">{{ label }}</button>
    <p @click="changeColor()">
      隨機顏色: {{ randomColor }}
    </p>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  const label = computed(() => `${showMe.value ? 'Hide' : 'Show'} me`)

  const toggleShowMe = () => {
    showMe.value = !showMe.value
  }

  const changeColor = () => {
    randomColor.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }


  const showMe = ref(false)
  const randomColor = ref("#" + Math.floor(Math.random() * 16777215).toString(16));

  defineProps({
    msg: {
      type: String,
      default: 'ROSSI WHITE',
    }
  })

</script>

<style scoped>

  .color9 {
    display: grid;
    justify-items: center;
    place-items: center;
    width: 400px;
    height: 200px;
  }

</style>