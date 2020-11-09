<template>
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
                <v-card-title class="display-1">¡El dominio se encuentra disponible!</v-card-title>
                <v-card-subtitle>Aquierelo ahora y recibe todos nuestros grandiosos beneficios.</v-card-subtitle>
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
                            <v-icon color="#7CC609" v-text="item.icon"></v-icon>
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
    </v-container>
</template>
<script>
export default {
    data: () => ({
      items:[
          {
              'text':'dominio.com.ni', icon:'mdi-checkbox-marked-circle',
              'subtitle':'$50.00/año'
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

</style>