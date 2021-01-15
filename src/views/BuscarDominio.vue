<template>
<div>
<vue-headful :title="title"/>
    <v-container>
        <v-row>
            <v-col cols="12"
                    lg="12"
                    md="12"
            >
                 <v-card
                flat
                color="#EEEEEE"
                >
                <v-card-title class="display-1"
                    v-for="(item, i) in items2"
                    :key="('A' + i)"
                >{{item.text}}
                </v-card-title>
                <v-card-subtitle
                v-for="(item, i) in items2"
                    :key="('B' + i)"
                >{{item.subtitle}}</v-card-subtitle>
                <v-divider class="mx-4"></v-divider>
                <v-row>
                    <v-col cols="12"
                        lg="8"
                        md="12"
                >
                    <v-list-item two-line
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-icon>
                            <v-icon :color="item.color" v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title class="font">{{item.text}}</v-list-item-title>
                    <v-list-item-subtitle class="precio">{{item.subtitle}}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                    <p class="parrafo1 ma-5">Si necesita ayuda, puede comunicarse con nosotros al número (505) 2222 2222</p>
                </v-col>
                <v-col cols="12"
                        lg="4"
                        md="12"
                        class="align-self-center"
                >
                    <v-btn
                    class="btn-reg white--text d-flex mb-6 mobile"
                    tile
                    color="#7CC609"
                    upercase
                    x-large
                    >
                    <router-link class="decoracion" :to="{name:'iniciarsesion'}" target="_blank">registrar</router-link>
                    
                    </v-btn>
                </v-col>
                </v-row>
                </v-card>
            </v-col>
        </v-row>
         <h4 class="ma-3"
            >Hemos encontrado estos dominios para usted</h4>
        <v-row   v-for="(item, i) in masDominios"
            :key="('C' + i)">
           
            <v-col cols="12">
                <v-card
                elevation="2"
                outlined
                 color="#EEEEEE"
                >
                <v-row>
                    <v-col cols="12" lg="6" md="12">
                        <p class="ma-3 text-negro text-left">{{ item.dominio }}</p>
                    </v-col>
                    <v-col cols="12" lg="3" md="12">
                        <p class="ma-3 text-negro">{{ item.precio }}</p>
                    </v-col>
                    <v-col  cols="12" lg="3" md="12">
                        <v-btn
                        class="btn-reg white--text d-flex mobile"
                        tile
                        color="#7CC609"
                        upercase
                        x-large
                        >
                        <router-link class="decoracion" :to="{name:'iniciarsesion'}" target="_blank">registrar</router-link>
                        
                        </v-btn>
                    </v-col>

                </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
import vueHeadful from 'vue-headful';
export default {
    components:{
        vueHeadful
    },
    data: () => ({
        title:'Buscar Dominio',
      items:[
          {
              'text':'dominio.com.ni', 
               icon:'mdi-checkbox-marked-circle',
            //   mdi-close-circle
              'subtitle':'$50.00/año',
              'color':'#7CC609'
          }
      ],
      items2: [
          {
              'text': '¡El dominio se encuentra disponible!',
              'subtitle': 'Aquierelo ahora y recibe todos nuestros grandiosos beneficios.'
          }
      ],
      masDominios:[
          {
              'dominio': 'dominio.ni',
              'precio': '$500.00/año'
          },
           {
              'dominio': 'dominio.net.ni',
              'precio': '$50.00/año'
          }
      ]
    }),
}
</script>
<style>
.v-chip:before {
    background-color: none !important;
}
.font{
    font-size: 26px;
    font-weight: 600;
    color: #616161 !important;
}
.precio{
    line-height: 58px;
    font-size: 20px;
}
.parrafo1{
    color: #616161 !important;
    margin-right: 10px !important;
}
.decoracion{
   text-decoration: none;
}
@media (max-width: 725px){
    .mobile{
        margin-left: 10px !important;
    }
}
.text-negro{
    color: #000 !important;
    font-size: 20px !important;
}

</style>