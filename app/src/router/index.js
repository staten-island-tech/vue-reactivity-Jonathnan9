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
      path: '/brass',
      name: 'Brass Instruments',
      component: () => import('../views/BrassView.vue'),
    },
    {
      path: '/woodwind',
      name: 'Woodwind Instruments',
      component: () => import('../views/WwView.vue'),
    },
    {
      path: '/percussion',
      name: 'Percussion Instruments',
      component: () => import('../views/PercView.vue'),
    },
    {
      path: '/other',
      name: 'Other Instruments',
      component: () => import('../views/OtherView.vue'),
    },
  ],
})

export default router
