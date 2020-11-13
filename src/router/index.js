import { createWebHistory, createRouter } from "vue-router";

import Category from "../components/Content/Category.vue";
import Photo from "../components/Content/Photo.vue";
import Login from "../components/Login/Login.vue";

const routes = [
  {
    path: '/',
    name: 'category',
    component: Category
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/category',
    name: 'adm_cat',
    component: Category
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router