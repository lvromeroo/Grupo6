import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'Inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/armado',
    name: 'Armado',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Armado.vue')
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/componentes',
    name: 'Componentes',

    component: () => import(/* webpackChunkName: "about" */ '../views/Componentes.vue')
  },
  {
    path: '/diseno',
    name: 'Diseno',

    component: () => import(/* webpackChunkName: "about" */ '../views/Diseno.vue')
  },
  {
    path: '/carrito',
    name: 'Carrito',

    component: () => import(/* webpackChunkName: "about" */ '../views/Carrito.vue')
  },
  {
    path: '/cuenta',
    name: 'Cuenta',

    component: () => import(/* webpackChunkName: "about" */ '../views/Cuenta.vue')
  },
  {
    path: '/admIte',
    name: 'AdmItem',

    component: () => import(/* webpackChunkName: "about" */ '../views/ItemAdm.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
