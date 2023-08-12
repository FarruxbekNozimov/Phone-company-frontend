import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      title: 'Home',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/companies',
          name: 'Companies',
          component: () => import('@/views/Companies.vue')
        },
        {
          path: '/forms',
          name: 'Forms',
          component: () => import('@/views/Forms.vue')
        },
        {
          path: '/requests',
          name: 'Requests',
          component: () => import('@/views/Requests.vue')
        },
        {
          path: '/request',
          name: 'Request',
          component: () => import('@/views/Request.vue')
        },
        {
          path: '/chats',
          name: 'Chats',
          component: () => import('@/views/Chats.vue')
        },
        {
          path: '/alerts',
          name: 'Alerts',
          component: () => import('@/views/Alerts.vue')
        },
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/User.vue')
        },
        {
          path: '/company',
          name: 'Company',
          component: () => import('@/views/Company.vue')
        },
        {
          path: '/company-add',
          name: 'Company-add',
          component: () => import('@/views/Company-add.vue')
        },
        {
          path: '/form',
          name: 'Form',
          component: () => import('@/views/Form.vue')
        },
        {
          path: '/form-add',
          name: 'Form-add',
          component: () => import('@/views/Form-add.vue')
        },
        {
          path: '/profile',
          name: 'Profile',
          component: () => import('@/views/Profile.vue')
        },
        {
          path: '/request-add',
          name: 'Request-add',
          component: () => import('@/views/Request-add.vue')
        },
        {
          path: '/text',
          name: 'Text',
          component: () => import('@/views/Text.vue')
        },
        {
          path: '/user-add',
          name: 'User-add',
          component: () => import('@/views/User-add.vue')
        },
        {
          path: '/users',
          name: 'Users',
          component: () => import('@/views/Users.vue')
        },
        {
          path: '/icons',
          name: 'Icons',
          component: () => import('@/views/Icons.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          name: '404',
          component: () => import('@/views/404.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
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
