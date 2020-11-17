<template>
  <section id="quienessomos">
    <v-container>
      <v-row>
        <v-col 
          cols="12"
        >
          <h1 class="display-1"
          v-for="(item, index) in titulo"
          :key="index"
          text
          >{{item.text}}</h1>

        </v-col>
      </v-row>
      <v-row>
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
  </section>
</template>
<script>
export default {
 
        data:() => ({
          titulo:[
            {
              'text': '¿Qué es el Nic.ni?'
            }
          ],
          historias:[
            {'text': 'La Dirección NIC.NI, por el significado de su siglas “Network Information Center.NI”, fue creada mediante el Acuerdo de Rectoría No. 810, con fecha del 03 de Octubre del año 2013, adscrita a la Secretaría General de la Universidad Nacional de Ingeniería (UNI).'},
            { 'text': 'El NIC.NI es una organización sin fines de lucro, dedicados a promover el uso de Internet en nuestro país teniendo como meta para este año 2020 ampliar nuestra propuesta de servicios y dar una solución completa a las necesidades de todos nuestros usuarios y de los venideros.'},
            {'text':'El Nic.Ni no recibe ninguna asignación presupuestaria de parte de ninguna organización publica o privada, nacional o internacional. Toda la estructura de costos administrativos, técnicos y de proyectos es cubierta con fondos propios proveniente de registro de dominio y administración de recursos IPv4.'},
            // {'text':'El Nic.Ni esta en proceso de normar las exoneraciones a los dominios de los proyectos sociales del Estado.'},
            {'text':'El Nic.Ni administra el uso racional de la reserva de segmentos IPv4 asignados a esta dirección debido a los diferentes proyectos de desarrollo del internet en el país.'}
          ]
        })
}
</script>
<style>
.primer-parrafo{
  color: #000 !important;
}
.dominio{
  padding-left: 10px;
}


</style>