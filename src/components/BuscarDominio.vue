<template>
    <v-container>
         <v-row>
          <v-col cols="12 p-10">
            <v-form >
                <v-row no-gutters>
                      <v-col
                        cols="12"
                        lg="8"
                        md="6"
                        sm="12"
                      >
                        <v-text-field
                         dark
                          label="Escriba el dominio que desea registrar"
                          outlined
                          clearable
                          filled
                        ></v-text-field>
                      </v-col>
                      <v-col
                        class="d-flex ml-1"
                        cols="12"
                        lg="3"
                        md="3"
                        sm="12"
                        >
                        <v-select
                        color="rgba(196,196,196,0.85)"
                          :items="items"
                          label="Dominio"
                          outlined
                         dark
                          filled
                        >
                        </v-select>
                        <v-btn
                        class="mr-2"
                        color="#003791"
                        elevation="9"
                        large
                      >Buscar
                      </v-btn>
                    </v-col>  
                </v-row>
           </v-form>
      </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {

    data: () => ({
        
        loading: false,
         items:['.ni','.com','.edu','.net']
        
        }
)}
</script>
<style scoped>
@media (max-width: 460px ) {
  .v-application .display-2 {
    margin-top: 80px !important;
  }
  .v-application .title{
    display: none;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    height: 55px;
    min-width: 55px !important;
    padding: 0 19.5555555556px;
    margin-left: 5px;
    color: #fff;
   
}
}
.theme--light.v-label {
    color: #fff !important;
}
.v-btn:not(.v-btn--round).v-size--large {
    height: 55px;
    min-width: 78px;
    padding: 0 19.5555555556px;
    margin-left: 5px;
    color: #fff;
}
 .theme--light.v-input input, .theme--light.v-input textarea{
   color: #fff !important;
  
 }
 .theme--light.v-select .v-select__selection--comma {
    color: #fff !important;
}
.mdi-menu-down::before {
    content: "\F035D";
    color: #fff;
}

.v-list-item__title {
  
    color: #000 !important;
}
</style>