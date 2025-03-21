import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import CreatePost from '../views/CreatePostView.vue'
import PostDetail from '../views/PostDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'Create',
    component : CreatePost
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component : PostDetail,
    props : true

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
