import { createWebHistory, createRouter } from "vue-router";

import Category from "../components/Content/Category.vue";
import Photo from "../components/Content/Photo.vue";
import Login from "../components/Login/Login.vue";
import CatAdmin from "../components/Login/CatAdmin.vue";
import PhotoAdmin from "../components/Login/PhotoAdmin.vue";


const routes = [
  {
    path: '/',
    name: 'category',
    component: Category
  },
  {
    path: '/photo/:category_id',
    name: 'photo',
    component: Photo,
    props: true
  },
  {
    path: '/admin/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin/category',
    name: 'adm_cat',
    component: CatAdmin
  },
  {
    path: '/admin/photo/:category_id',
    name: 'adm_photo',
    component: PhotoAdmin,
    props: true
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router