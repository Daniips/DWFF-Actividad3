// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SpacesView from '../views/SpacesView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/spaces', name: 'Spaces', component: SpacesView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
