import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Watch from '@/components/Watch'
import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/watch',
      name: 'Watch',
      component: Watch
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
