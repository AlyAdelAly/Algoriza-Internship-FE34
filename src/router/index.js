import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView/Home.vue'
import LoginPage from '../views/Login.vue'
import HotelResultsPage from '../views/HotelsView/HotelResults.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/hotelResults',
      name: 'Hotel Results',
      component: HotelResultsPage
    }
  ]
})


export default router
