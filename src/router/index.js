import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import CreatePost from '../views/CreatePostView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import TagView from '../views/TagView.vue'
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
    name: 'PostDetail',
    component : PostDetailView,
    props : true

  },
  {
    path: '/tags/:tag',
    name: 'TagView',
    component: TagView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
