<template>
  <div class="container">
    <div class="card border-primary">
      <div class="card-header bg-primary text-white">Авторизация</div>
      <div class="card-body">
        <div>
          <input
            type="text"
            v-model="login"
            class="form-control adm_log"
            placeholder="введите имя"
          />
          <br />
          <input
            type="text"
            v-model="pass"
            class="form-control adm_pass"
            placeholder="введите пароль"
          />
          <span class="input-group-btn">
            <br />
            <button @click="entry" class="btn btn-primary">войти</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      login: "",
      pass: "",
    };
  },
  methods: {
    entry() {
      let wm = this;
      axios
        .post("http://127.0.0.1:8000/api/auth/login", {
          email: this.login,
          password: this.pass,
        })
        .then(function (response) {
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.access_token)
          );
          wm.$router.push({ name: "adm_cat" });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>