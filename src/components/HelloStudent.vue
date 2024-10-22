<template>
  <div>
    <h1>
      hi, {{ msg }}
    </h1>
    <h2>
      Location: {{ location_song }}
    </h2>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: {
      type: String,
      default: "rossi.black"
    }
  })

  const location_song = ref("yilan city")

</script>

<style scoped></style>