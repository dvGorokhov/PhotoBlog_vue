<template>
  <div>
    <Header />
    <h1>My Photo Blog</h1>
    <hr />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
