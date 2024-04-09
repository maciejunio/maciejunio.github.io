import { createMemoryHistory, createRouter } from 'vue-router'

import Main from '@/views/Main.vue'
import Portfolio from '@/views/Portfolio.vue'

const routes = [
  { path: '/', name: 'Home', component: Main },
  { path: '/portfolio/:id', name: 'Portfolio', component: Portfolio }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (from.name === 'Portfolio') {
      return {
        el: '#portfolio'
      }
    }
    return { top: 0 }
  }
})
