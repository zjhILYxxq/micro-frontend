<template>
  <div id="main">
    <div id="nav">
      <router-link to="/app1">app1</router-link> |
      <router-link to="/app2">app2</router-link> |
      <router-link to="/app3">app3</router-link> |
    </div>
    <div id="microApp"></div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
