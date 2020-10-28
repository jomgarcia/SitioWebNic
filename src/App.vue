
<template>
  <v-app id="app">
    <Menu/>
    <Drawer/>
    <Jumbotron/>
   <v-main>
     <router-view></router-view>
   </v-main>
   <MenuFooter/>
   <Footer/>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import Drawer from './components/Drawer'
import Jumbotron from './components/Jumbotron'
import MenuFooter from './components/MenuFooter'
import Footer  from './components/Footer'


export default {
  name: 'App',

  components: {
   Menu,
   Jumbotron,
    Footer,
    Drawer,
    MenuFooter
 
  },

  data: () => {
    return {

    }
  }
}
</script>
