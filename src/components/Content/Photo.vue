<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="photo in all_photos" v-bind:key="photo.id">
        <img :src="photo.url" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.show_all_photos();
  },
  props: {
    category_id: {
      type: [Number, String],
    },
  },
  data() {
    return {
      all_photos: [],
    };
  },
  methods: {
    show_all_photos() {
      axios
        .get("http://127.0.0.1:8000/api/auth/photo", {
          params: { category_id: this.category_id },
        })
        .then((response) => {
          console.log(response.data);
          this.all_photos = response.data;
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
  max-width: 300px;
  height: 200px;
}
</style>