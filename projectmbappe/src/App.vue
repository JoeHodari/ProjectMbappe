<template>
  <TheNavbar/>
  <Picha/>
  <TheFooter/>
</template>

<script>

import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';
import Picha from './components/Picha.vue';


export default {
  name: 'App',
  components: {
    TheNavbar,
    TheFooter,
    Picha
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
