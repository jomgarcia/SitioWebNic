<template>
<div>
  <vue-headful :title="title"/>
    <section id="historia">
    <v-container>
     
      <v-row>
  
        <v-col cols="12"
               lg="6"
               md="12"
        >
                <h1 class="display-1 mb-5"
                v-for="(item, i) in titulo"
                :key="i"
                text
                >{{item.text}}</h1>
                <p class="text-justify primer-parrafo"
                v-for="(item, i) in mision"
                :key="'A' + i"
                text
                >
                {{item.text}}
                </p>
        </v-col>
  
   
        <v-col cols="12"
                        lg="6"
                        md="12"
                >
                <h1 class="display-1 mb-5"
                v-for="(item, i) in tvision"
                :key="'B' + i"
                text
                >{{item.text}}</h1>
                <p class="text-justify primer-parrafo"
                v-for="(item, i) in vision"
                :key="'C' + i"
                text
                >
                {{item.text}}
                </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
  </div>
</template>
<script>
import vueHeadful from 'vue-headful';

export default {
  components:{
  vueHeadful
  },
    data:() => ({
      title:'Misión y Visión',
          titulo:[
            {
              'text': 'Nuestra Misión'
            }
          ],
          mision:[
            {'text': 'La Dirección NIC.NI es una instancia de la UNI (Universidad Nacional de Ingeniería), acreditada por IANA (Internet Assigned Numbers Authority ) y ICANN ( Internet Corporation for Assigned Names and Numbers) para administrar el Dominio regional .NI y segmentos de Protocolo de Internet (IP), con la finalidad de contribuir como un actor activo en el uso y desarrollo del internet a nivel nacional, así como brindar colaboración a diferentes inversiones y actividades que aporten al desarrollo de la UNI.'},
            
          ],
          tvision:[
              {'text':'Nuestra Visión'}
          ],
          vision:[
              {'text':'La Dirección NIC.NI de la Universidad Nacional de Ingeniería se consolida como una instancia con reconocimiento nacional e internacional en la administración de los re asignados, y como un proveedor líder de servicio de internet con calidad a empresas de servicios de comunicación y usuarios finales de todo el país, contribuyendo al desarrollo de nuestra institución y de la región.'}
          ]
        })
}
</script>

<style>
.primer-parrafo{
  color: #000 !important;
}
</style>