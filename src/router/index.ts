import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchedView from '../views/SearchedView.vue'
import RandomSongsView from '../views/RandomSongsView.vue'
import NewSongsView from '../views/NewSongsView.vue'
import HotSongsView from '../views/HotSongsView.vue'
import HotKeywordView from '../views/HotKeywordView.vue'
import SongView from '../views/SongView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search/:keyword',
    name: 'search',
    component: SearchedView
  },
  {
    path: '/new_songs',
    name: 'new_songs',
    component: NewSongsView
  },
  {
    path: '/hot_songs',
    name: 'hot_songs',
    component: HotSongsView
  },
  {
    path: '/hot_keyword',
    name: 'hot_keyword',
    component: HotKeywordView
  },
  {
    path: '/song/:id',
    name: 'song',
    component: SongView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomSongsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
