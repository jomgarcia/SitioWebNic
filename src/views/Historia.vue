<template>
<div>
<vue-headful :title="title"/>

    <v-container>
      
      <v-row>
        <v-col 
          cols="12" lg="12" md="12"
        >
          <h1 class="display-1"
          v-for="(item, index) in titulo"
          :key="index"
          text
          >{{item.text}}</h1>
            <v-subheader>Nuestras Historia</v-subheader>
        </v-col>
        <v-col cols="12"
                lg="12"
                md="12"
        >
         <p class="text-justify primer-parrafo"
           v-for="(item, i) in historias"
          :key="i"
          text
         >
          {{item.text}}
        </p>
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
    data:() => ({
      title:'Historia de Nic Nicaragua',
      
      titulo:[
            {
              'text': 'Historia de Nic Nicaragua'
            }
          ],
          historias:[
            { 'text':'Desde el año 1988, la UNI tiene el compromiso de administrar, según los procedimientos internacionales que las organizaciones aquí mencionadas establecen como prácticas establecidas y recomendadas, el Dominio de Nivel Superior .NI reconocido por el Internet Assigned Numbers Authority (IANA), Internet Corporation for Assigned Names and Numbers (ICANN), el InterNIC Registration Service (InterNIC) de ICANN, y el Latin American and Caribbean (LACTLD).'},
            // { 'text':'Además, administra los segmentos de números IPs bloque B: 165.98.0.0/165.98.1.0/165.98.2.0 hasta 165.98.254.0 y números IPs del bloque C:200.9.187.0/200.9.189.0/200.9.190.0/192.136.46.0/192.136.47.0; debidamente asignados y legados en 1989 y reconocido por el Latino American and Caribbean Internet Addresses Registry (LACNIC), Internet Assigned Numbers Authority (IANA), Internet Corporation for Assigned Names and Numbers (ICANN).'},
            { 'text':'Tenemos el honor de haber sido, el .NI, el segundo código de dominio abierto y delegado en Latinoamérica. Brasil, BR, fue el primer código de país en Latinoamérica en abrirse y delegarse por IANA. Nuestra operación esta normada por la regulación RFC1591 sobre prácticas de operación de IANA.'},
            { 'text':'Cabe destacar, que el NIC.NI es una organización sin fines de lucro, dedicados a promover el uso de Internet en nuestro país teniendo como meta para este año 2014 ampliar nuestra propuesta de servicios y dar una solución completa a las necesidades de todos nuestros usuarios y de los venideros.'},
            { 'text':'Actualmente el NIC.NI es miembro de LACNIC y LACTLD. Lacnic es el ente regional para el uso de números IP y Lactld es el ente encargado de la administración de nombres de dominio.'}
          ]
        })
}
</script>
<style>
.primer-parrafo{
  color: #000 !important;
}
</style>