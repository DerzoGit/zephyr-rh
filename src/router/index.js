import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EmployeeDetails from '../views/EmployeeDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employee/:id(\\d+)',
    name: 'EmployeeDetails',
    component: EmployeeDetails,
    props: true
  },
  {
    path: "/:pathMatch(.*)*", redirect: "/"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
