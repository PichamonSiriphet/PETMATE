import { createRouter, createWebHistory } from 'vue-router';
import Forgot from "../views/Forgotpass.vue";
import test from "../views/test.vue";
import login from "../components/logingis.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/Forgetpassword',
      name: 'forgot',
      component: Forgot
    },

    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
 
  ]
})



export default router
