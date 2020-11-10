<template>
 <section id="faqs">
     <v-container>
         <v-row>
             <v-col cols="12"
             >
                <h1
                    class="display-1 text-center"
                >Preguntas Frecuentes</h1>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12"
             >
                <template>
                <v-expansion-panels focusable>
                    <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                    >
                    <v-expansion-panel-header>¿Este es un texto ejemplo de la pregunta frecuente del cliente?</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
                </template>
             </v-col>
         </v-row>
     </v-container>
 </section>
</template>
<script>
export default {
    
}
</script>