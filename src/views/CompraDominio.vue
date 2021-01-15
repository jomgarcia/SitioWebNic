<template>
    <section>
    <v-img class="fullwith" :height="$vuetify.breakpoint.smAndUp ? '10vh' : '100vh'"
        src="../assets/img/bk.png"
        >
    </v-img>
 <v-container>
            <v-row>
                <!-- titulo -->
                <v-col cols="12"
                    lg="12"
                    md="12"
                >
                 <h1 class="color-texto display-1 text-center mt-5 mb-5"
                        v-for="(item, i) in titulo"
                        :key="('AB' + i)"
                        text
                        >{{item.text}}
                </h1>
                <div
                  class="title color-texto text-center font-weight-light"
                  v-text="subtitle"
                />
                </v-col>
                <!-- fin titulo -->
                <!-- inicio de numero pasos de compra -->
                <v-col cols="12">
                    <v-stepper v-model="e1">
                        <!-- pasos -->
                        <v-stepper-header>
                            <v-stepper-step
                                color="#7CC609"
                                :complete="e1 > 1"
                                step="1"
                            >
                                Elección de Dominios
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step
                                color="#7CC609"
                                :complete="e1 > 2"
                                step="2"
                            >
                                Información de Facturación
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                color="#7CC609"
                                :complete="e1 > 3"
                                step="3">
                                    Pago
                            </v-stepper-step>

                            <v-divider></v-divider>

                            <v-stepper-step 
                                color="#7CC609"
                                step="4">
                                    Completado
                            </v-stepper-step>
                        </v-stepper-header>
                        <!-- fin numero pasos -->
                        <v-stepper-items>
                            <!-- contenido de los pasos 1 -->
                            <v-stepper-content step="1">
                                <v-card
                                class="mb-12"
                                color="grey lighten-5"
                                height="1200px"
                                >
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" lg="6" md="12">
                                        <v-card-subtitle
                                        class="text-dominio"
                                        >
                                        dominio.com.ni
                                        </v-card-subtitle>
                                         <v-list disabled>
                                            <v-list-item-group
                                                color="primary"
                                            >
                                                <v-list-item class="mt-4"
                                                v-for="(item, i) in items"
                                                :key="('C' + i)"
                                                >
                                                <v-list-item-icon>
                                                    <v-icon v-text="item.icon"></v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title class="s" v-text="item.text"></v-list-item-title>
                                                </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="12">
                                        <v-card-subtitle
                                        class="text-precio text-right"
                                        >
                                        $50.00/año
                                        </v-card-subtitle>
                                        <v-card-subtitle
                                        class="text-precio2 text-right"
                                        >
                                        $50.00/año
                                        </v-card-subtitle>
                                        <v-card-subtitle
                                        class="text-precio3 text-right"
                                        >
                                        $50.00/año
                                        </v-card-subtitle>
                                        </v-col>
                                        <v-col cols="12" lg="6" md="12">
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <div
                                            class="subtitle color-texto text-left font-weight-light"
                                            v-text="subtitle2"
                                            />
                                            
                                        </v-col>
                                        <v-col cols="12">
                                            <v-card
                                               outlined
                                               elevation="2"
                                               color="grey lighten-5" 
                                               v-for="(item, i) in dominios"
                                               :key="('G' + i)"
                                            >
                                                <v-row>
                                                    <v-col cols="12" lg="6" md="12">
                                                         <p  class="ma-3 text-negro text-left">{{ item.dominio }}</p>
                                                    </v-col>
                                                    <v-col cols="12" lg="3" md="12">
                                                         <p  class="ma-3 text-negro text-left">{{ item.precio }}</p>
                                                    </v-col>
                                                        <v-col  cols="12" lg="3" md="12">
                                                        <v-btn
                                                        class="btn-reg white--text d-flex mobile"
                                                        tile
                                                        color="#7CC609"
                                                        upercase
                                                        x-large
                                                        >
                                                        <router-link class="decoracion" :to="{name:''}" target="_blank">Agregar</router-link>
                                                        
                                                        </v-btn>
                                                        </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-col>
                                         <v-col cols="12" lg="12">
                                            <h1 class="color-texto display-1 text-center mt-5 mb-5">¿Necesitas otro dominio?</h1>
                                            <buscar-dominio />
                                        </v-col>
                                    </v-row>
                                </v-container>
                                </v-card>
                                <v-btn
                                color="#17A2B8"
                                @click="e1 = 2"
                                class="white--text"
                                >
                                Continuar
                                </v-btn>

                                <v-btn text>
                                Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- contenido de los pasos 2 -->
                            <v-stepper-content step="2">
                                <v-card
                                class="mb-12"
                                color="grey lighten-5"
                                height="200px"
                                ></v-card>

                                <v-btn
                                color="#17A2B8"
                                @click="e1 = 3"
                                class="white--text"
                                >
                                Continuar
                                </v-btn>

                                <v-btn text>
                                Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- contenido de los pasos 3 -->
                            <v-stepper-content step="3">
                                <v-card
                                class="mb-12"
                                color="grey lighten-5"
                                height="200px"
                                ></v-card>

                                <v-btn
                                color="#17A2B8"
                                @click="e1 = 4"
                                class="white--text"
                                >
                                Continuar
                                </v-btn>

                                <v-btn text>
                                Cancelar
                                </v-btn>
                            </v-stepper-content>
                            <!-- contenido de los pasos 4 -->
                            <v-stepper-content step="4">
                                <v-card
                                class="mb-12"
                                color="grey lighten-5"
                                height="200px"
                                ></v-card>

                                <v-btn
                                color="#17A2B8"
                                @click="e1 = 1"
                                class="white--text"
                                >
                                Continuar
                                </v-btn>

                                <v-btn text>
                                Cancelar
                                </v-btn>
                            </v-stepper-content>
                        </v-stepper-items>
                        <!-- fin contenido de pasos -->
                        
                    </v-stepper>
                </v-col>
                <!-- fin pasos de compra -->
            </v-row>
        </v-container>
     <!-- <h3></h3> -->
    </section>
</template>
<script>

export default {
    components:{
        BuscarDominio:() => import ('@/components/BuscarDominio')
    },
     data () {
         return {
            e1: 1,
             titulo:[
            {
              'text': 'Registro de dominio en línea'
             
            },
            
          ],
           subtitle: 'Puedes registrar y administrar tus dominios desde nuestra web, fácil, rápido y seguro',
           subtitle2:'Te recomendamos proteger tu dominio en estas zonas, para evitar plagios a tu marca',
        items: [
            { text: 'dominio.tv.ni', icon: 'mdi-check-circle' },
            { text: 'dominio.ac.ni', icon: 'mdi-check-circle' },
      
      ],
      dominios: [
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          },
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          },
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          },
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          },
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          },
          {
            'dominio': 'dominio.ni',
            'precio':'$50.00/año',
          }
      ],

        }
         
     }
}
</script>
<style>
.fullwith{
    margin-top: -20px;
    margin-bottom: -20px;
}
.color-texto{
 color: #616161;
}
.subtitle{
    font-style: normal;
    font-weight: 600 !important;
    font-size: 20px;
    line-height: 29px;
    color: #616161;
}
.title-dominio{
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 30px !important;
    line-height: 30px !important;
    color: #616161 !important;

}
.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label {
    color: rgba(0, 0, 0, 0.40) !important;
}
.text-dominio{
    font-style: normal;
    font-weight: 600 !important;
    font-size: 40px !important;
    line-height: 58px !important;
}
.text-precio{
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 28px !important;
    line-height: 58px !important;
    color: #ABAAAA !important;
}
.text-precio2{
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 20px !important;
    line-height: 58px !important;
    color: #ABAAAA !important;
}
.text-precio3{
    font-style: normal !important;
    font-weight: normal !important;
    font-size: 20px !important;
    line-height: 58px !important;
    color: #ABAAAA !important;
}
.text-negro{
    color: #000 !important;
    font-size: 20px !important;
}
.decoracion{
    text-decoration: none;
}
@media (max-width: 725px){
    .text-precio{
    text-align: center !important;
}
}
</style>