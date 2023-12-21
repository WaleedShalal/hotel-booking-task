import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/booked-hotels',
      name: 'bookedHotels',
      beforeEnter: (to, from, next) => {
        const loggedUserEmail = localStorage.getItem('userBookedEmail')
        if (!loggedUserEmail) next({ name: 'login' })
        else next()
      },
      component: () => import('@/views/BookedHotelsView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    }
  ]
})

export default router
