<template>
  <div>
    <div v-if="part === 1" class="scc">part1</div>
    <div v-if="part === 2" class="dng">part2</div>
    <div>{{ str }}</div>
    <div v-if="all_cats.length > 0" class="row">
      <div class="category col" v-for="cat in all_cats" v-bind:key="cat.id">
        <img :src="cat.cat_img_url" :alt="cat.name" />
        <span>{{ cat.name }}</span>
      </div>
    </div>
    <div v-else>Список пуст</div>
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
      all_cats: [],
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
          this.all_cats = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
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
div {
  color: #42b983;
  .category {
    color: salmon;
    margin: 0 auto;
    max-width: 250px;
  }
}
.dng {
  color: crimson;
}
.scc {
  color: gold;
}
</style>
