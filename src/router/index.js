import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '@/components/HomeContent'
import Dashboard from '@/components/Dashboard'
import Catalogos from '@/components/Catalogos'
import Programacion from '@/components/Programacion'
import Visualizacion from '@/components/Visualizacion'
import Mensajes from '@/components/Mensajes'
import Notificaciones  from '@/components/Notificaciones'
import Login  from '@/components/Login'
import Register  from '@/components/Register'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeContent
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',      
      children: [
        {
          path: 'catalogos',
          component: Catalogos,
          name: 'Catalogos'
        },
        {
          path: 'programacion',
          component: Programacion,
          name: 'Programacion'
        },
        {
          path: 'visualizacion',
          component: Visualizacion,
          name: 'Visualizacion'
        },
        {
          path: 'mensajes',
          component: Mensajes,
          name: 'Mensajes'
        },
        {
          path: 'notificaciones',
          component: Notificaciones,
          name: 'Notificaciones'
        }

      ]
    }
  ]
})
