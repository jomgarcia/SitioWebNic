<template>
   <section>
       <v-container fluid>
           <v-row dense>
                <v-col  cols="12">
                    <h1 class="display-1">Cursos CISCO disponibles</h1>
               </v-col>
           </v-row>
           <v-row > 
               <v-col 
                    v-for="(curso, i) in cursos"
                    :key="i"
                    :cols="cursos.flex"
               >
                 <v-hover v-slot="{ hover }">
                    <v-card
                    class="mx-auto mt-4 mb-4"
                    max-width="344"
                    tile
                  :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                  
                >
                    <v-img
                    :src="curso.src"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                    {{curso.title}}
                    </v-card-title>

                    <v-card-subtitle>
                   {{curso.subtitle}}
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="#003791"
                        :class="{ 'show-btns': hover }"
                    >
                       <a v-bind:href="curso.url" target="_blank" class="deco">Más</a>
                    </v-btn>

                    <v-spacer></v-spacer>
                    </v-card-actions>
                    </v-card>
                    </v-hover>
               </v-col>
           </v-row>
       </v-container>
   </section>
</template>
<script>
export default {
    data () {
        return {
            cursos: [
                {
                    title: 'IoT',
                    subtitle: 'Introducción a Internet de las Cosas',
                    src: require('../assets/img/iot.png'),
                    url:'https://www.netacad.com/portal/es/web/self-enroll/c/course-634978',
                    flex: 3
                },
                {
                    title: 'Conectarse',
                    subtitle: 'Se presenta Internet a los estudiantes',
                    src: require('../assets/img/get-conected.jpg'),
                    url: 'https://www.netacad.com/portal/es/web/self-enroll/c/course-635022',
                    flex: 3
                },
                {
                    title: 'Introduccioón a la Ciberseguridad',
                    subtitle: 'El curso Introduction to Cybersecurity',
                    src: require('../assets/img/security.jpg'),
                    url: 'https://www.netacad.com/portal/es/web/self-enroll/c/course-627689',
                    flex: 3
                },
                {
                    title: 'Emprendimiento',
                    subtitle: 'Los estudiantes aprenden al completar una serie de casos prácticos interactivos.',
                    src: require('../assets/img/emprendimiento.jpg'),
                    url:'https://www.netacad.com/portal/es/web/self-enroll/c/course-634997',
                    flex: 3
                }
            ]
        }
    }
}
</script>

<style>
.titulo{
    color: #616161;
}
.deco{
    text-decoration: none !important;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
 }
 .show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.v-card {
  transition: opacity .5s ease-in-out;
}
</style>