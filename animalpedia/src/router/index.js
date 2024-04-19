import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BookView from '../views/BookView.vue'
import LoginView from '../views/LoginView.vue'

import ManageBookView from '../views/manage/ManageBookView.vue'
import ManageDctView from '../views/manage/ManageDctView.vue'
import ManageNewsView from '../views/manage/ManageNewsView.vue'
import ManageTagView from '../views/manage/ManageTagView.vue'

import NewsView from '../views/NewsView.vue'

import StatsAnimalsView from '../views/stats/StatsAnimalsView.vue'
import StatsNewsView from '../views/stats/StatsNewsView.vue'
import StatsOthersView from '../views/stats/StatsOthersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/manage_book',
      name: 'manage_book',
      component: ManageBookView
    },
    {
      path: '/manage_dct',
      name: 'manage_dct',
      component: ManageDctView
    },
    {
      path: '/manage_news',
      name: 'manage_news',
      component: ManageNewsView
    },
    {
      path: '/manage_tag',
      name: 'manage_tag',
      component: ManageTagView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/stats_animals',
      name: 'stats_animals',
      component: StatsAnimalsView
    },
    {
      path: '/stats_news',
      name: 'stats_news',
      component: StatsNewsView
    },
    {
      path: '/stats_others',
      name: 'stats_others',
      component: StatsOthersView
    },
  ]
})

export default router
