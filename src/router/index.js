import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/Recommend')
const Singer = () => import('@/views/Singer')
const Rank = () => import('@/views/Rank')
const Search = () => import('@/views/Search')

const routes = [
  {
    path: '/',
    redirect:'/recommend'
  },
  {
    path:'/recommend',
    component: Recommend
  },
  {
    path:'/singer',
    component: Singer
  },
  {
    path:'/rank',
    component: Rank
  },
  {
    path:'/search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
