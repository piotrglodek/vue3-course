import { createRouter, createWebHistory } from 'vue-router';
import Heroes from './pages/Heroes.vue';
import Calendar from './pages/Calendar.vue';
import Home from './pages/Home.vue';
import Markdown from './pages/Markdown.vue';
import Slider from './pages/Slider.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dc-heroes', component: Heroes },
  { path: '/calendar', component: Calendar },
  { path: '/markdown', component: Markdown },
  { path: '/slider', component: Slider },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
