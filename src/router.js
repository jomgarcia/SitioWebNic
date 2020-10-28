import Vue from 'vue'

import Router from 'vue-router'




Vue.use(Router);

const router = new Router({
    node: 'history',
    base: process.env.BASE_URL,
    routes: [{

            path: '/',
            name: 'Inicio',
            component: () =>
                import ('@/views/Inicio')

        },
        {
            path: '/historia',
            name: 'Historia',
            component: () =>
                import ('@/views/Historia')
        },

        {
            path: '/quienessomos',
            name: 'somos',
            component: () =>
                import ('@/views/QuienesSomos')
        },

        {
            path: '/misionvision',
            name: 'misionvisio',
            component: () =>
                import ('@/views/MisionVision')
        },
        {
            path: '/valores',
            name: 'valores',
            component: () =>
                import ('@/views/Valores')
        },
        {
            path: '/whois',
            name: 'whois',
            component: () =>
                import ('@/views/WhoIs')
        },
        {
            path: '/buscardominio',
            name: 'buscardominio',
            component: () =>
                import ('@/views/BuscarDominio')
        },
        {
            path: '/informaciongeneral',
            name: 'informaciongeneral',
            component: () =>
                import ('@/views/InformacionGeneral')
        },
        {
            path: '/requisitos',
            name: 'requisitos',
            component: () =>
                import ('@/views/Requisitos')
        },
        {
            path: '/iniciarsesion',
            name: 'iniciarsesion',
            component: () =>
                import ('@/views/IniciarSesion')
        },
        {
            path: '/contactenos',
            name: 'contactenos',
            component: () =>
                import ('@/views/Contactenos')
        }

    ]
})
export default router