import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/SectionView.vue'
import ProductCart from '@/components/ProductCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/SectionView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/BrassView.vue'),
    },
  ],
})

export default router
