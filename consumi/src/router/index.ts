import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Importa automaticamente todos os arquivos `.vue` da pasta views
const pages = import.meta.glob('../views/*.vue')

const routes: RouteRecordRaw[] = Object.entries(pages).map(([path, component]) => {
  const name = path
    .split('/')
    .pop()!
    .replace(/\.vue$/, '')
    .toLowerCase()

  return {
    path: name === 'homeview' ? '/' : `/${name.replace('view', '')}`,
    name: name.replace('view', ''),
    component,
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router