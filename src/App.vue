<script setup lang="ts">
import { useStore } from 'vuex'
const store = useStore();
</script>

<template>
  <div>
    <h1>Base Template</h1>

    <h2>Count : {{ store.state.count }}</h2>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/gallery">Gallery</router-link>
      </li>
    </ul>

    <router-view />
  </div>
</template>

<style scoped>

</style>
