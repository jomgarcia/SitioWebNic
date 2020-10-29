<template>
    <v-app>
        <Menu />
        <Drawer />
        <Jumbotron />
        <Vista />
        <MenuFooter />
        <Footer />
    </v-app>
</template>
<script>
export default {
     metaInfo: {
      titleTemplate: '%s — Nic'
    },

    components: {
        Drawer: () => import ('@/components/Drawer'),
        Footer: () => import ('@/components/Footer'),
        MenuFooter: () => import ('@/components/MenuFooter'),
        Menu: () => import ('@/components/Menu'),
        Jumbotron: () => import ('@/components/Jumbotron'),
        Vista: () => import ('@/components/Vista')
    }
}
</script>


