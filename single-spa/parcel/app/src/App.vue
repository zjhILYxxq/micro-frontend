<template>
  <div id="app">
    <VueComponent />
  </div>
</template>

<script>
import VueComponent from './components/vue-component.vue'

export default {
  name: 'App',
  components: {
    VueComponent
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
