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
        },
        {
          path: '/companies',
          name: 'Companies',
          component: () => import('../views/Companies.vue')
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('../views/Users.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.name
  if (title) document.title = title

  next()
})

export default router
