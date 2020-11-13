<template>
  <div class="container-fluid">
    <div class="header">
      <div class="subscribe">
        <span> subscribe </span>
        <button @click="inst">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </button>
        <button @click="vk"><i class="fa fa-vk" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    inst() {
      window.open("http://google.com");
    },
    vk() {
      window.open("http://ya.ru");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 76px;
}
.subscribe {
  margin-left: auto;
  max-width: 150px;

  span {
    display: block;
    font-weight: 900;
  }
  button {
    min-width: 30px;
    margin: 4px;
    border-radius: 50%;
  }
  button:focus {
    outline: none;
  }
  button:hover {
    min-height: 35px;
    min-width: 35px;
  }
}
</style>

