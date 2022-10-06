<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TheNavbar msg="Welcome to Project mbappe"/>
  <TheDropdown/>
</template>

<script>

import TheNavbar from './components/TheNavbar.vue';
import TheDropdown from './components/TheDropdown.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheDropdown
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
