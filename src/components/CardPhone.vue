<template>
  <!-- <v-card
    class="mx-auto mt-4" 
      max-width="350"
  >
    <v-img
      src="../assets/img/cisco_network_academy_app.jpg"
      height="200px"
    ></v-img>

    <v-card-title class="titulo pb-0">
      TODOS NUESTROS CLIENTES RECIBEN CAPACITACIONES GRATUITAS DE CISCO
    </v-card-title>
  </v-card> -->
  <v-card
    class="mx-auto mt-4 mb-4"
    max-width="344"
  >
    <v-img
      src="../assets/img/cisco_network_academy_app.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
     CISCO
    </v-card-title>

    <v-card-subtitle>
      Cisco Networking Academy
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Más
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          TODOS NUESTROS CLIENTES RECIBEN CAPACITACIONES GRATUITAS DE CISCO
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
    data: () =>({
        show: false,
    }),
}
</script>

<style>
.titulo{
    color: #616161;
}
</style>