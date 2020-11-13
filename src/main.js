import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'

window.axios = require('axios');

createApp(App).use(router, VueAxios, axios).mount('#app')
