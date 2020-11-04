<template>
  <v-navigation-drawer
    dark
    v-model="inputValue"
    fixed
    left
    temporary
  >
    <v-row
      align="center"
      class="ma-0 pa-3 flex-no-wrap"
    >
      <v-img
        contain
        src="/static/logoNic.png"
        width="50"
      />
      <v-btn
        aria-label="Close"
        class="ml-4"
        icon
        @click="toggleDrawer"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-divider />

    <!-- <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
      >
        <v-list-item-title v-text="item.text" />
      
      </v-list-item>
    </v-list> -->
    <v-list
       nav
        dense>
          <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                text
          >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
              <v-list-item-title class="lista" v-text="item.text" />
        </v-list-item>
      <v-list-group
       no-action
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title class="lista">Nosotros</v-list-item-title>
        </template>
        <v-list-item
            v-for="(link, index) in links" :key="index" router :to="link.route"
            link
            text
          >
           
            <v-list-item-title class="lista">{{ link.text }}</v-list-item-title>
          </v-list-item>
      </v-list-group>
       <v-list-group
       no-action
        :value="true"
        prepend-icon="mdi-earth"
      >
        <template v-slot:activator>
          <v-list-item-title class="lista">Dominios</v-list-item-title>
        </template>
        <v-list-item
             v-for="(link, index) in links2" :key="index" router :to="link.route"
            link
            text
          >
               <v-list-item-title class="lista">{{ link.text }}</v-list-item-title>
          </v-list-item>
      </v-list-group>
      <v-list-item-group>
        <div>
            <v-list-item
                v-for="(item, i) in items1"
                :key="i"
                :to="item.to"
                text
            >
            <v-list-item-icon>
              <v-icon>mdi-contacts</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="lista"
               
            >{{item.text}}</v-list-item-title>
          </v-list-item>
        </div>
           <div>
            <v-list-item
           >
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <!-- <v-list-item-title class="lista">
              
              </v-list-item-title> -->
              <router-link :to="{name: 'iniciarsesion'}" target="_blank">Inisiar Sesión</router-link>
          </v-list-item>
           </div>
           
     </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  
  import { mapState, mapMutations } from 'vuex'

  export default {
    data: () => ({
      links: [
        {text: 'Quienes Somos', route: '/QuienesSomos'},
        {text: 'Historia', route: '/Historia'},
        {text: 'Misión y Visión', route: '/MisionVision'},
        {text: 'Valores', route: '/Valores'},
      ],
      links2: [
        { text: 'WhoIs', route: '/WhoIs'},
        { text: 'Buscar Dominio', route: '/BuscarDominio'},
        { text: 'Información General', route: '/InformacionGeneral'},
        { text: 'Requisitos', route: '/Requisitos'},
      ],
       items: 
          [
            {
            'to': '/',
            'text': 'Inicio'
            },
          ],
        items1: 
            [
              {
                'to':'/contactenos',
                'text':'Contáctenos'
              }
            ],
          items2:
            [
              {
                'to':'/iniciarsesion',
                'text':'Iniciar Sesión'
              }
            ]

      // items: [
      //   {
      //      text: 'Inicio', route: '/Inicio'
      //     },
      // ]
    }),

    computed: {
      ...mapState(['drawer']),
      inputValue: {
        get () {
          return this.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
       
        
      }
    },

    methods: {
      ...mapMutations(['setDrawer', 'toggleDrawer'])
    }
  }
</script>
<style>
.lista{
  color: #fff !important;
}
</style>