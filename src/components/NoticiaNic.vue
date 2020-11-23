<template>
   <v-sheet
    class="mx-auto mb-10 mt-10 background"
    elevation="0"
    max-width="1400"
    max-height="1200"
    
  >
    <h1 class="display-1 text-center mt-10 mb-8"> Noticias y Anuncios</h1>
    <!-- <v-slide-group
      v-model="model"
      class="pa-4"
      
    >
      <v-slide-item
        v-for="n in 5"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'blue darken-1' : 'grey lighten-1'"
          class="ma-4"
          height="300"
          width="300"
          @click="toggle"
        >
        <v-img 
        :src="items.src"
        ></v-img>
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

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="title">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition> -->
 <!-- <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="blue darken-1"
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
    </v-slide-group>   -->
 <v-carousel
   
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      v-bind:href="item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
      text
    >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <v-col cols="12" lg="12" md="12">
          <h1 class="back py-4 pa-2">
          {{item.text}}
          </h1>
        </v-col>
         
        </v-row>
    </v-carousel-item>
</v-carousel> 
  </v-sheet> 

 <!-- <v-carousel
 class="mt-10 mb-10"
    reverse-transition="fade-transition"
    transition="fade-transition"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >

    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->

<!-- <v-carousel
   
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
</v-carousel> -->
</template>
<script>
export default {
     data () {
      return {
        model: null,
        items: [
          {
            src:require('../assets/img/4.jpg'),
            text:'¿Que es y como funciona internet de las cosas?',
            url:'https://www.nic.ni/noticias/noticia/1041'
          },
          {
            src:require('../assets/img/5.jpg'),
          },
          {
            src:require('../assets/img/6.jpg'),
          },
          {
            src:require('../assets/img/7.jpg'),
          },
        ],
      }
    },
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
.back{
  font-size: 28px;
  margin-top: 300px;
  height: 100px;
  width: 100%;
  background: rgba(0, 0, 0, 0.51); ;
}
@media (max-width: 725px){
        .back{
          display: none;
        }
}
</style>