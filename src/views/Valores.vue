<template>
<div>
    <vue-headful :title="title"/>
   <section id="valores">
       <v-container>
           <v-row>
               <v-col cols="12">
                   <h1 class="display-1 text-center"
                        v-for="( item , i) in items"
                        :key="i"
                        text
                   >{{item.text}}</h1>
               </v-col>
           </v-row>
           <v-row>
               <v-col cols="12">
                                <v-timeline
                    align-top
                    :dense="$vuetify.breakpoint.smAndDown"
                >
                    <v-timeline-item
                    v-for="(item, i) in items1"
                    :key="('A' + i)"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot
                    >
                    <v-card
                        :color="item.color"
                        dark
                    >
                        <v-card-title class="title"
                        
                        >
                        {{item.titulo}}
                        </v-card-title>
                        <v-card-text class="white text--primary card-valores">
                        <p class="primer-parrafo">{{item.subtitulo}}</p>
                        </v-card-text>
                    </v-card>
                    </v-timeline-item>
                </v-timeline>
               </v-col>
               <v-col cols="12">
                   <p class="text-justify primer-parrafo">Nic.Ni al actuar de acuerdo con estos valores obtenemos una posición de liderazgo sostenible, por que actuamos siempre con responsabilidad y profesionalismo (actualizando conocimientos tecnológicos) enfocados en el desarrollo.</p>
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
    data: () =>({
        title:'Nuestros Valores',
         items1: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          titulo: 'Responsabilidad',
          subtitulo:'Responsabilidad'
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
          titulo:'Compromiso',
          subtitulo:'Compromiso'
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-account-multiple-outline',
          titulo: 'Trabajo en Equipo',
          subtitulo:'Trabajo en Equipo'
        },
        {
          color: 'indigo',
          icon: 'mdi-arrange-bring-forward',
          titulo:'Innovación',
          subtitulo:'Innovación'
        },
         {
          color: 'brown',
          icon: 'mdi-google-circles-extended',
          titulo:'Integridad',
          subtitulo:'Integridad'
        },
      ],
        items:[
            {'text': 'Valores NIC .NI'}
        ],
    })
}
</script>
<style>
.primer-parrafo{
  color: #000 !important;
}
@media (min-width: 725px){
    .card-valores{
        display: none;
    }
    .primer-parrafo{
         color: #000 !important;
         font-size: 18px !important;
    }
}
</style>