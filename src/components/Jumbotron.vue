<template>
<div id="inicio">


  <v-sheet
    :height="$vuetify.breakpoint.smAndUp ? '70vh' : '100vh'"
    color="primary"
    tile
  >
    <v-img
      :key="image"
      :src="image"
      gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .60)"
      height="100%"
    >
      <v-container
        fill-height
        white--text
      >
        <v-slide-x-transition appear>
          <v-row>
            <v-col
               cols="12"
                align="center"
                justify="center"
              >
                <h1
                  :class="$vuetify.breakpoint.smAndUp ? 'display-3' : 'display-2'"
                  class="mb-2"
                  v-text="title"
                >
                </h1>
                <div
                  class="title font-weight-light"
                  v-text="subtitle"
                />
              </v-col>
          </v-row>
          
        </v-slide-x-transition>
        <buscar-dominio/>
        <!-- <v-row>
          <v-col cols="12 p-10">
            <v-form >
                <v-row no-gutters>
                      <v-col
                        cols="12"
                        lg="8"
                        md="6"
                        sm="12"
                      >
                        <v-text-field
                         dark
                          label="Escriba el dominio que desea registrar"
                          outlined
                          clearable
                          filled
                        ></v-text-field>
                      </v-col>
                      <v-col
                        class="d-flex ml-1"
                        cols="12"
                        lg="3"
                        md="3"
                        sm="12"
                        >
                        <v-select
                        color="rgba(196,196,196,0.85)"
                          :items="items"
                          label="Dominio"
                          outlined
                         dark
                          filled
                        >
                        </v-select>
                        <v-btn
                        class="mr-2"
                        color="#003791"
                        elevation="9"
                        large
                      >Buscar
                      </v-btn>
                    </v-col>  
                </v-row>
           </v-form>
      </v-col>
        </v-row> -->
      </v-container>
    </v-img>
  </v-sheet>
  </div>
</template>

<script>
  export default {
    components: {
      BuscarDominio:()=> import ('@/components/BuscarDominio')
    },
    data: () => ({
      titles: {
        inicio: {
          title: 'PROMUEVA SU PERFIL EMPRESARIAL CON UN DOMINIO .NI',
          // subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor scelerisque dui praesent ullamcorper.'
        },
        quienessomos: {
          title: 'Nic.ni',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        historia: {
          title: 'Historia',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        misionvision: {
          title: 'Misión - Visión',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        valores: {
          title: 'Valores',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        whois: {
          title: 'WhoIs',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        buscardominio: {
          title: 'Buscar Dominio',
          // subtitle: 'Phasellus gravida semper nisi. Fusce convallis metus id felis luctus adipiscing.'
        },
        
        // iniciarsesion: {
        //   title: 'Iniciar Sesión',
        // },
        contactenos: {
          title: 'Contáctenos'
        }
      },
      
      
      // loading: false,
      // items:['.ni','.com','.edu','.net']
    }),

    computed: {
      namespace () {
        if (!this.$route || !this.$route.name) return ''

        return this.$route.name.toLowerCase()
      },
      image () {
        return '/static/' + this.namespace + '-team.jpg'
      },
      subtitle () {
        return this.titles[this.namespace].subtitle
      },
      title () {
        return this.titles[this.namespace].title
      }
    },
  }
</script>
<style>
.v-application .display-3{
  font-size: 48px !important;
 
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin-top: 100px;
}
 @media  (max-width: 600px ) {
  .v-application .display-2 {
    font-size: 40px !important;
    margin-top: 80px !important;
  }
}
@media (max-width: 460px ) {
  .v-application .display-2 {
    margin-top: 80px !important;
  }
  .v-application .title{
    display: none;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    height: 55px;
    min-width: 55px !important;
    padding: 0 19.5555555556px;
    margin-left: 5px;
    color: #fff;
   
}
}
.theme--light.v-label {
    color: #fff !important;
}
.v-btn:not(.v-btn--round).v-size--large {
    height: 55px;
    min-width: 78px;
    padding: 0 19.5555555556px;
    margin-left: 5px;
    color: #fff;
}
 .theme--light.v-input input, .theme--light.v-input textarea{
   color: #fff !important;
  
 }
 .theme--light.v-select .v-select__selection--comma {
    color: #fff !important;
}
.mdi-menu-down::before {
    content: "\F035D";
    color: #fff;
}

.v-list-item__title {
  
    color: #000 !important;
}
</style>