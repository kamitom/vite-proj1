<template>
  <div class="container">
    <h2>海角七號v3</h2>
    <p v-for="user in olderThan26" :key="user.id">
      user: <span> {{ user }}</span>
    </p>
    <p>
      總計: <span>{{ numberOfUsers }}</span>
    </p>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore();

  const olderThan26 = computed(() => store.getters.usersOlderThan26);
  const numberOfUsers = computed(() => store.getters.numberOfUsersOlderThan26)

</script>

<style scoped>

  .container {
    display: grid;
    justify-content: center;
    width: 400px;
    background-color: hsl(205, 95%, 49%);
    color: white
  }

</style>