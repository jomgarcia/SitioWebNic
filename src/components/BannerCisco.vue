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
          TODOS NUESTROS CLIENTES RECIBEN CAPACITACIONES GRATUITAS DE CISCO
          </h3>
     
          </v-col>
          <v-col 
                 cols="12"
                lg="2"
                md="4"
                sm="12"

            >
            <v-img
            class="v-img"
              maxheight="42px"
              max-width="178px"
              src="../assets/img/cisco.png"
            >
            </v-img>
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