import {createRouter,createWebHistory } from 'vue-router'
import Heroes from './pages/Heroes.vue'
import Calendar from './pages/Calendar.vue'
import Home from './pages/Home.vue'

const routes = [
    { path: '/', component:Home },
    { path: '/dc-heroes', component:Heroes },
    { path: '/calendar', component: Calendar },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router