<template>
  <div>
    <h1 v-if="loading">非同步取得遠端資料</h1>
    <div v-if="loading" class="isloading">Loading...</div>
    <div v-else>
      <p v-for="player in new_players" :key="player.id">
        MLB player: <span>{{ player }} </span>
      </p>
    </div>
  </div>
</template>

<script setup>

  // 如何使用created, mounted, updated, beforeUnmount, unmounted
  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()

  onMounted(() => {
    console.log('mounted')
    store.dispatch('fetchMLBplayers')
  })

  const new_players = computed(() => store.state.mlb_players)
  const loading = computed(() => store.state.isLoading)


</script>

<style scoped>

  .isloading {
    color: red;
    font-size: 86px;
  }


</style>
