<template>
<v-footer padless color="#222222">
  <!-- <v-container-fluid>
      <v-row>
          <v-col cols="12"
                    lg="4"
                    md="12"
                    sm="12"
          >
              <v-card 
              tile
             flat
              dark
              >
                <h4 class="pt-10 py-2 pa-5"
              >ENLACES DE INTERÉS</h4>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-subtitle class="pa-10">Nuestra Historia</v-list-item-subtitle>
                    </v-list-item-content>
                    
                    </v-list-item>
              </v-card>
          </v-col>
           <v-col cols="12"
                    lg="4"
                    md="12"
                    sm="12"
          >
              <v-card 
              tile
              flat
              dark
              >
                <h4 class="pt-10 py-2 pa-5"
              >ENLACES DE INTERÉS</h4>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-subtitle class="pa-10">Nuestra Historia</v-list-item-subtitle>
                    </v-list-item-content>
                    
                    </v-list-item>
              </v-card>
          </v-col>
           <v-col cols="12"
                    lg="4"
                    md="12"
                    sm="12"
          >
              <v-card 
              tile
              flat
              dark
              >
                <h4 class="pt-10 py-2 pa-5"
              >ENLACES DE INTERÉS</h4>
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-subtitle class="pa-10">Nuestra Historia</v-list-item-subtitle>
                    </v-list-item-content>
                    
                    </v-list-item>
              </v-card>
          </v-col>
      </v-row>
  </v-container-fluid> -->
<v-container class="">
    <v-row >
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
            color="#222222"
            class="pa-2"
            flat
            tile  
        >
            <h4 class="pt-6 py-2 lista"
              >ENLACES DE INTERÉS</h4>
                <v-list-item two-line class="border">
                    <v-list-item-content>
                        <v-list-item-title class="lista"><router-link to="/Historia">Nuestra Historia</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/MisionVision">Misión y Visión</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/Valores">Valores</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/BuscarDominio">Consulta disponibilidad de dominios</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/Faqs">FAQs</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-card>
        <v-card
            color="#222222"
            class="pa-2"
            flat
            tile  
        >
            <h4 class="pt-6 py-2 lista"
              >DOCUMENTOS IMPORTANTES</h4>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="lista"><router-link to="/">Políticas</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/">Reglamento nic.ni</router-link></v-list-item-title>
                        <v-list-item-title class="lista pt-3"><router-link to="/">Normativas vigentes</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
        </v-card>
      </v-col>
       <v-col
        cols="12"
        sm="4"
      >
          <v-card
                color="#222222"
                class="pa-2"
                flat
                tile  
            >
            <h4 class="pt-6 py-2 lista"
              >CONÉCTATE A NUESTRAS REDES</h4>
              <v-card-subtitle class="lista2">No perdamos el contacto y siguenos en:</v-card-subtitle>
      
               <!-- <v-list-item-icon class="lista-icon">
                    <v-icon large left color="#17A2B8"
                    >mdi-facebook</v-icon>
                    <v-list-item-title class="lista"><a href="">Facebook</a></v-list-item-title>
                </v-list-item-icon>
            
                <v-list-item-icon class="lista-icon">
                    <v-icon large  left color="#17A2B8"
                    >mdi-twitter</v-icon>
                    <v-list-item-title class="lista"><a href="">Twitter</a></v-list-item-title>
                </v-list-item-icon> -->
                     <v-list  color="#222222">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                        mdi-facebook
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista"><a href="">Facebook</a></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                        mdi-twitter
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista"> <a href="">Twitter</a></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                       mdi-instagram
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista"><a href="">Instagram</a></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                       mdi-youtube
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista"><a href="">YouTube</a></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                       mdi-linkedin
                    </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                    <v-list-item-title class="lista"><a href="">LinkedIn</a></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
             </v-card>
        </v-col>
         <v-col
        cols="12"
        sm="4"
      >
        <v-card
            color="#222222"
            class="pa-2"
            flat
            tile  
        >
            <h4 class="pt-6 py-2 lista"
              >CONTÁCTENOS</h4>
               <v-card-subtitle class="lista2">No perdamos el contacto y siguenos en:</v-card-subtitle>
             <v-list two-line color="#222222">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                        mdi-map-marker 
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista">Dirección</v-list-item-title>
                    <v-list-item-action-text class="lista2">Universidad Nacional de Ingeniería, Recinto Universitario Simón Bolivar.  Edificio Rigoberto López</v-list-item-action-text>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                        mdi-email
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista">¿Alguna pregunta?</v-list-item-title>
                    <v-list-item-subtitle class="lista2">info@nic.ni</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>

                <v-list-item>
                    <v-list-item-icon>
                    <v-icon color="#17A2B8">
                       mdi-phone
                    </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                    <v-list-item-title class="lista">Llámenos o escríbanos</v-list-item-title>
                    <v-list-item-subtitle class="lista2">(505) 2270-0958 - (505) 2270-0958</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
      </v-col>
    </v-row>
</v-container>
</v-footer>
</template>
<script>
export default {
     
}
</script>

<style>
.lista-icon{
    margin-right: 30px;
    position: relative;
}
.lista2{
    color: #9E9E9E !important;
}
.border{
    border-left: 2px solid #17A2B8;
}
.lista{
    color: #fff !important;
}
.lista a{
    text-decoration: none;
}

</style>