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
               <thead>
                <tr>
                <th class="text-left">
                 Empresa
                </th>
                <th class="text-center"
                >
              Fecha de Expiración de Dominio
                </th>
                <th class="text-center"
                >
               Dirección de Empresa
                </th>
                </tr>
               </thead>
               <tbody>
              <tr
                v-for="item in datosempresa"
                :key="item.nombre"
              >
                <td>{{ item.nombre }}</td>
                <td class="text-center">{{ item.fecha }}</td>
                <td class="text-center">{{ item.direccion }}</td>
              </tr>
            </tbody>
            </template>
        </v-simple-table>
        <v-row>
          <v-col cols="12"
                    lg="12"
                    v-model="items"
                    v-for="(item, i) in items"
                    :key="('A'+i)"
           >
            <h3 class="negrita mt-8">{{item.subtitle2}}</h3>
           </v-col>
        </v-row>
         <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"
                >
                Nombre
                </th>
                <th class="text-center"
                >
            Correo Electrónico
                </th>
                <th class="text-center"
                >
            Nivel de Dominio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in datoscontacto"
                :key="item.nombre"
              >
                <td >{{ item.nombre }}</td>
                <td class="text-center">{{ item.correo }}</td>
                <td class="text-center">{{ item.nivel }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        </v-container>
</section>
  
</template>
<script>
// import axios from 'axios';

export default {
    data: () =>({
        items:[
            {
                'text':'Resultado de la búsqueda WhoIs',
                'subtitle':'Datos de Empresa',
                'subtitle2':'Información de Contacto'
            }
        ],

        datosempresa:[
          {
              nombre:'Banco de America Central S.A.',
              fecha: '5/10/2021',
              direccion: '	Km 4.5 carretera masaya centro BAC'
          }
        ],
        datoscontacto:[
            {
              nombre:'Alvaro Lacayo',
              correo:'contadorgeneral@generifar.com.ni',
              nivel:'Tercer'
            }
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