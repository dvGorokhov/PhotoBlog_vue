<template>
  <div class="container">
    <button @click="showModal" class="btn btn-success">add category</button>
    <br />
    <br />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">cat_img_url</th>
          <th scope="col">change</th>
          <th scope="col">del</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cat, index) in all_cats" v-bind:key="cat.id">
          <td>{{ cat.id }}</td>
          <td>{{ cat.name }}</td>
          <td>{{ cat.cat_img_url }}</td>
          <td><button @click="showModal(index)">1</button></td>
          <td><button>2</button></td>
        </tr>
      </tbody>
    </table>
    <CatModal :show="show_modal" @hide="closeModal">
      <template v-slot:content>
        <span>add name</span>
        <input v-model="selected.name" type="text" />
        <span>add cat_img_url</span>
        <input v-model="selected.cat_img_url" type="text" />
        <div>
          <button @click="save">save</button>
        </div>
      </template>
    </CatModal>
  </div>
</template>

<script>
import CatModal from "../modal/CatModal";
import axios from "axios";
export default {
  mounted() {
    this.show_all();
  },
  components: {
    CatModal,
  },
  data() {
    return {
      all_cats: [],
      show_modal: false,
      selected: {
        index: null,
        id: null,
        name: "",
        cat_img_url: "",
      },
    };
  },
  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/auth/category", this.selected, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then(() => {
          this.show_all();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    show_all() {
      axios
        .get("http://127.0.0.1:8000/api/auth/category", {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((response) => {
          this.closeModal();
          this.all_cats = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    showModal(index = null) {
      if (index > -1) {
        this.selected = {
          index: index,
          id: this.all_cats[index].id,
          name: this.all_cats[index].name,
          cat_img_url: this.all_cats[index].cat_img_url,
        };
      }
      this.show_modal = true;
    },
    closeModal() {
      this.show_modal = false;
      this.selected = {
        index: null,
        id: null,
        name: "",
        cat_img_url: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>