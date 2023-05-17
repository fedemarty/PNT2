import { createRouter, createWebHistory } from '@ionic/vue-router'
import HomeView from '../views/HomeView.vue'
import SystemView from '../views/SystemView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DetailView from '../views/DetailView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import AgregarGastoView from '../views/AgregarGastoView.vue'
import CategoriaView from '../views/CategoriaView.vue'
import AgregarCategoriaView from '../views/AgregarCategoriaView.vue'
import CrearUsuarioView from '../views/CrearUsuarioView.vue'
import EditarUsuarioView from '../views/EditarUsuarioView.vue'
import EditarGastoView from '../views/EditarGastoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/system',
      name: 'system',
      component: SystemView
    },
    {
      path: '/editarGasto',
      name: 'editarGasto',
      component: EditarGastoView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFoundView
    },  
    {
      path:'/agregarGasto',
      name:"agregarGasto",
      component: AgregarGastoView
    },  
    {
      path:'/Categoria',
      name:"Categoria",
      component: CategoriaView
    }, 
    {
      path:'/agregarCategoria',
      name:"agregarCategoria",
      component: AgregarCategoriaView
    }, 
    {
      path:'/crearUsuario',
      name:"crearUsuario",
      component: CrearUsuarioView
    },  
    {
      path:'/editarUsuario',
      name:"editarUsuario",
      component: EditarUsuarioView
    },  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
