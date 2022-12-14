import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/room/:id',
      name: 'room',
      component: () => import('@/views/room.vue')
    }
  ]
})
