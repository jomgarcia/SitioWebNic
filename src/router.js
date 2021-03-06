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
            path: '/quienessomos',
            name: 'quienessomos',
            component: () =>
                import ('@/views/QuienesSomos')
        },
        {
            path: '/historia',
            name: 'historia',
            component: () =>
                import ('@/views/Historia')
        },


        {
            path: '/misionvision',
            name: 'misionvision',
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
            path: '/recuperarcontraseña',
            name: 'recuperarcontraseña',
            component: () =>
                import ('@/views/RecuperarContraseña')
        },
        {
            path: '/crearusuario',
            name: 'crearusuario',
            component: () =>
                import ('@/views/CrearUsuario')
        },
        {
            path: '/contactenos',
            name: 'contactenos',
            component: () =>
                import ('@/views/Contactenos')
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: () =>
                import ('@/views/Faqs')
        },
        {
            path: '/cursocisco',
            name: 'cursocisco',
            component: () =>
                import ('@/views/CursoCisco')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/DashBoard')
        },
        {
            path: '/compradominio',
            name: 'compradominio',
            component: () =>
                import ('@/views/CompraDominio')
        }
    ]
})
export default router