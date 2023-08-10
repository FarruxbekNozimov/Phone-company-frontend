import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      title: 'Home',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/Home.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.name
  if (title) document.title = title

  next()
})

export default router
