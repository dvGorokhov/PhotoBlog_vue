<template>
  <div>
    <div v-if="part === 1" class="scc">part1</div>
    <div v-if="part === 2" class="dng">part2</div>
    <div>{{ str }}</div>
    <div>{{ all_cat }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.show_cat();
  },
  props: {
    part: {
      type: Number,
      default: 1,
    },
    str: {
      type: String,
      default: "none",
    },
  },
  data() {
    return {
      all_cat: "no category",
    };
  },
  methods: {
    show_cat() {
      axios
        .get("http://127.0.0.1:8000/api/auth/category", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>


<style scoped>
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
