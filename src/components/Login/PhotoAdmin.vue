<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">url</th>
          <th scope="col">photo</th>
          <th scope="col">change</th>
          <th scope="col">del</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="photo in all_photos" v-bind:key="photo.id">
          <td>{{ photo.id }}</td>
          <td>{{ photo.url }}</td>
          <td><img :src="photo.url" /></td>
          <td>4</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
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
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
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
  height: 50px;
  width: 50px;
}
</style>