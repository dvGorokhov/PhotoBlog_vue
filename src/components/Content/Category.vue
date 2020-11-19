<template>
  <div>
    <div v-if="all_cats.length > 0" class="row">
      <CardCategory
        v-for="cat in all_cats"
        v-bind:key="cat.id"
        :name="cat.name"
        :img="cat.cat_img_url"
        @click="goToPhoto(cat.id)"
      />
    </div>
    <div v-else>Список пуст</div>
  </div>
</template>

<script>
import CardCategory from "./CardCategury";
import axios from "axios";
export default {
  mounted() {
    this.show_cat();
  },
  components: {
    CardCategory,
  },
  data() {
    return {
      all_cats: [],
    };
  },
  methods: {
    show_cat() {
      axios
        .get("http://127.0.0.1:8000/api/auth/category")
        .then((response) => {
          this.all_cats = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goToPhoto(id) {
      let wm = this;
      wm.$router.push({ name: "photo", params: { category_id: id } });
      //wm.$router.push("/photo/" + id);
    },
  },
};
</script>


<style lang="scss" scoped>
</style>
