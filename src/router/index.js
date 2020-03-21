import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '../views/Home.vue'
import AutoMenu from '../views/AutoMenu.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // }
    {
      path: '/',
      name: '系统设置',
      component: AutoMenu,
      children: [
        {
          path: '/Page1',
          name: '页面1',
          component: Page1
        },
        {
          path: '/Page2',
          name: '页面2',
          component: Page2
        }
      ]
    },
    {
      path: '/navigation',
      name: '导航2',
      component: AutoMenu,
      children: [
        {
          path: '/Page3',
          name: '页面3',
          component: Page3
        },
        {
          path: '/Page4',
          name: '页面4',
          component: Page4
        }
      ]
    }
  ]
})
