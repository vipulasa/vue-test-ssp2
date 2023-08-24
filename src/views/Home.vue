<script setup lang="ts">

import { useStore } from 'vuex'
import { ref } from 'vue'

const store = useStore()

const count = ref(100);

const user = ref({
  email : '',
  password : ''
});

const increment = () => {
  count.value++;
};

const increaseStoreCount = () => {
  store.commit('increment');
};

const loginUser = () => {
  // write the validation here !!!
  store.dispatch('loginUser', user);
};

</script>

<template>
  <div class="gallery">
    <h1>Home</h1>
    <p>Count is: {{ count }}</p>

    <button v-on:click="increment">Increase count</button>

    <button v-on:click="increaseStoreCount">Increase Store count</button>

    <form v-on:submit.prevent="loginUser">
      <input type="email" name="email" v-model="user.email">
      <input type="password" name="password"  v-model="user.password">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>
