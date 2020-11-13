<template>
  <v-sheet
    class="mx-auto mb-10 mt-10 background"
    elevation="0"
    max-width="1400"
    max-height="1200"
    
  >
    <h1 class="display-1 text-center mt-10 mb-8"> Noticias y Anuncios</h1>
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      center-active
    >
      <v-slide-item
        v-for="n in 5"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="300"
          width="300"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
    data: () => ({
      model: null,
    }),
  }
</script>
<style scoped>
/* .background{
  background:#232C33 !important;
} */

.mdi-chevron-left{
  color: #003791 !important;
    font-size: 48px !important;
}
</style>