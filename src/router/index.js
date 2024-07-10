import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Crear from '../components/CrearUno.vue'
import Editar from '../components/EditarUno.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home     //Este componente hace referencia a la linea
    },
    {
    
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about"*/ '../viewa/About.vue')
    }
]

const rout = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router