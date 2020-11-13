<template>
  <div>
    <Header />
    <h1>My Photo Blog</h1>
    <hr />
    <router-view />
    <button @click="name" class="btn btn-danger">click</button>
    {{ a }}
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      a: "1",
      showPart: 1,
      str: "some text",
    };
  },
  methods: {
    name() {
      this.a = this.a * 5;
      this.showPart = this.showPart === 1 ? 2 : 1;
    },
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
