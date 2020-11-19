<template>
  <div class="category col">
    <img :src="img" :alt="name" />
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "123",
    },
    img: {
      type: String,
      default: "img",
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 150px;
  max-width: 200px;
}
span {
  display: block;
}
.category:hover {
  display: block;
  margin: 0 auto;
  border: 1px solid grey;
}
div {
  color: #42b983;
}
.dng {
  color: crimson;
}
.scc {
  color: gold;
}
</style>