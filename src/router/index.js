import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  // check user
  let user = projectAuth.currentUser
  // if not logged in, redirect to Welcome
  if (!user) {
    next({ name: 'Welcome' })
  } else next()
}
// auth guard for chatroom
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    // keep logged user in Chatroom
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
