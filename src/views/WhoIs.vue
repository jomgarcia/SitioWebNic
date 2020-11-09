<template>
 <section>
      <v-img
      class="fullwith"
        :height="$vuetify.breakpoint.smAndUp ? '70vh' : '100vh'"
        gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .10)"
        src="../assets/img//whois-team.jpg"
      >
      <v-container
        fill-height
        white--text
      >
     <v-slide-x-transition appear>
          <v-row>
            <v-col
               cols="12"
                align="center"
                justify="center"
              >
                <h1
                  class=" display-3  mb-2"
                >
                WhoIs
                </h1>
              </v-col>
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
                          :items="items2"
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
        </v-slide-x-transition>
      </v-container>
        </v-img>
       <v-container>
       <v-row>
           <v-col cols="12"
                    lg="12"
           >
            <h1 class="display-1 text-center"
                v-for="(item , i) in items"
                :key="i"
            >{{item.text}}</h1>
           </v-col>
           <v-col cols="12"
                    lg="12"
                    v-model="items"
                    v-for="(item, i) in items"
                    :key="('A'+i)"
           >
            <h3 class="negrita">{{item.subtitle}}</h3>
           </v-col>
          <v-divider></v-divider>
       </v-row>
           <v-simple-table>
            <template v-slot:default>
                <tr>
                <th class="text-left">
                 Empresa
                </th>
                <td class="text-center"
                     v-for="item in cliente"
                    :key="item.name"
                >
                {{item.name}}
                </td>
                </tr>
            </template>
        </v-simple-table>
         <v-simple-table class="mt-2">
            <template v-slot:default>
                <tr>
                <th class="text-left">
                 Dirección de Empresa
                </th>
                <td class="text-center"
                     v-for="item in cliente"
                    :key="item.name"
                >
                {{item.direccion}}
                </td>
                </tr>
            </template>
        </v-simple-table>
        </v-container>
</section>
  
</template>
<script>
export default {
    data: () =>({
        items:[
            {
                'text':'Resultado de la búsqueda WhoIs',
                'subtitle':'bac.ni'
            }
        ],
         cliente: [
          {
            name: 'Banco de America Central S.A.',
            direccion:'Km 4.5 carretera masaya centro BAC'
          },

        ],
        loading: false,
         items2:['.ni','.com','.edu','.net']
        
    })
}
</script>
<style >
.negrita{
    font-weight: 600 !important;
    line-height: 43px !important;
    font-style: bold !important;
    color: #000000 !important;
    font-size: 30px;
}
.fullwith{
    margin-top: -20px;
}
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
.decoracion{
  text-decoration: none !important;
}
</style>