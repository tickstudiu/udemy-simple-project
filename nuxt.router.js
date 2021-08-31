import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/Home.vue'
import EditProject from '~/pages/EditProject.vue'
import AddProject from '~/pages/AddProject.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: AddProject,
  },
  {
    path: '/project/:id',
    name: 'Edit',
    component: EditProject,
  },
]

export function createRouter(
  ssrContext,
  createDefaultRouter,
  routerOptions,
  config
) {
  const options =
    routerOptions || createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes,
  })
}
