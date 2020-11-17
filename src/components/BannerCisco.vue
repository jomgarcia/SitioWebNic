<template>
    
     <v-sheet
          color="#1C3792"
          height="157"
          width="100%"
          >
        <v-row>
          <v-col cols="12"
                lg="10"
                md="8"
                sm="12"
                xs="12"
                
          >
                
          <h3
          id="t-cisco"
           class="display-1"
          >
         OFRECEMOS A NUESTROS CLIENTES CAPACITACIONES GRATUITAS DE CISCO
         <router-link :to="{name: 'cursocisco'}">
         <v-chip
              class="ma-2"
              color="#567CC6"
              label
              text-color="white"
            >
              <v-icon left>
                mdi-arrow-right-thick
              </v-icon>
             Ver
            </v-chip>
            </router-link>
          </h3>
          </v-col>
          <v-col
                 cols="12"
                lg="2"
                md="4"
                sm="12"

            >
            <router-link :to="{name: 'cursocisco'}">
            <v-img
            class="v-img"
              maxheight="42px"
              max-width="178px"
              src="../assets/img/cisco.png"
            >
            </v-img>
            </router-link>
          </v-col>
        </v-row>
         </v-sheet>
</template>
<style>
#t-cisco{
    font-size: 26px !important;
    color: #ffffff;
    padding: 45px !important;
}
.select{
  cursor: pointer;
}
@media ( max-width: 725px){
    .v-img{
       display: none !important;
    }
   /* #t-cisco{
    font-size: 22px !important;
    color: #ffffff !important;
    padding: 10px !important;
    text-align: center;
} */
}
</style>