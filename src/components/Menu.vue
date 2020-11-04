<template>
  <v-app-bar
  height="80"
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'rgba(28, 55, 146, .85)'"
    :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    app
    dark
    elevate-on-scroll

  >
  
    <v-img
      alt="Nic"
      class="shrink"
      max-width="115"
      src="/static/logoNic.png"
    />
    <v-spacer />
    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <div class="mt-5">

      <v-btn
        v-for="(item, i) in items"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        text
      >
        <span v-text="item.text" />
      </v-btn>
      </div>
       
        <div class="mt-5">
          
      <v-menu offset-y   open-on-hover transition="slide-y-transition"
          bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :active-class="!isScrolling ? 'primary--text' : undefined"
          text
          v-bind="attrs"
          v-on="on"
        >
        Nosotros
        </v-btn>
      </template>
      
      <v-list flat>
        <v-list-item
          v-for="(item, index) in items1" 
          :key="index"  
          :to="item.to"
          text
          class="bgsel"
        >
        <!-- <span v-text="item.text" /> -->
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        </div>
        <div class="mt-5">

    <v-menu offset-y  open-on-hover  transition="slide-y-transition"
          bottom>
      <template v-slot:activator="{ on, attrs }" >
       <v-btn
          :active-class="!isScrolling ? 'primary--text' : undefined"
          text
          v-bind="attrs"
          v-on="on"
        >
       Dominios
        </v-btn>
      </template>
      <v-list flat>
        
        <v-list-item
          v-for="(item, index) in items2" 
          :key="index"  
          :to="item.to"
          class="bgsel"
        >
        <!-- <span v-text="link.text" /> -->
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        </div>
        <div class="mt-5">

     <v-btn
        v-for="(item, i) in items3"
        :key="i"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        :to="item.to"
        text
      >
        <span v-text="item.text" />
      </v-btn>
        </div>
        <div class="mt-5">

      <v-btn
        color="primary"
        :active-class="!isScrolling ? 'primary--text' : undefined"
        outlined
      >
      <router-link :to="{name: 'iniciarsesion'}" target="_blank">Iniciar Sesion</router-link>
      </v-btn>

        </div>
    </v-toolbar-items>
    <v-app-bar-nav-icon
      v-else
      aria-label="Open Navigation Drawer"
      @click="toggleDrawer"
    />
  </v-app-bar>
</template>

<script>

  import { mapMutations } from 'vuex'

  export default {
    data: () => ({
      isScrolling: false,
      // links: [
      //   {text: 'Quienes Somos', route: '/QuienesSomos'},
      //   {text: 'Historia', route: '/Historia'},
      //   {text: 'Misión y Visión', route: '/MisionVision'},
      //   {text: 'Valores', route: '/Valores'},
      // ],
      // links2: [
      //   { text: 'WhoIs', route: '/WhoIs'},
      //   { text: 'Buscar Dominio', route: '/BuscarDominio'},
      //   { text: 'Información General', route: '/InformacionGeneral'},
      //   { text: 'Requisitos', route: '/Requisitos'},
      // ]
    }),

    computed: {
      items () {
        return [
          {
            'to': '/',
            'text': 'Inicio'
          },
        ]
      },
      items1 (){
        return[
              {
                'to': '/quienessomos',
                'text': 'Quienes Somos'
              },
              {
                'to': '/historia',
                'text':'Historia'
              },
              {
                'to':'/misionvision',
                'text':'Misión Visión'
              },
              {
                'to':'/valores',
                'text':'Valores'
              }
        ]
      },
      items2 (){
        return[
              {
                'to': '/whois',
                'text':'WhoIs'
              },
              {
                'to':'/buscardominio',
                'text':'Buscar Dominio'
              },
              {
                'to':'/informaciongeneral',
                'text':'Información General'
              },
              {
                'to':'/requisitos',
                'text':'Requisitos'
              }
        ]
      },
      items3 (){
        return [
            {'to':'/contactenos',
              'text':'Contáctenos'
            },
          
        ]
      },
      items4 (){
        return [
          {'to':'/iniciarsesion',
            'text':'Iniciar Sesión'
          },
          
        ]
      }
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 25
      }
    },
    
  }
</script>

<style scope>
 
  .bgsel:hover {
    background: #afaeae63;
  }
 
 
  .flm:link {
    text-decoration: none;
  }
 
  .v-application a {
    color: #ffffff!important;
  } 
.v-btn{
  border-radius: 0 !important;
}
.v-text-field .fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot{
  border-radius: 0 !important;
}
</style>
