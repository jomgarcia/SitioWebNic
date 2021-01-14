<template>
  <section>
      <v-img
      class="fullwith"
        :height="$vuetify.breakpoint.smAndUp ? '180vh' : '100vh'"
        gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .10)"
        src="../assets/img/volcan.jpg"
      >
    <v-form name="form" id="form"  v-on:@submit.prevent="procesar();">
      <v-container>
        <v-row>
           <v-col cols="12" md="8"
              offset-md="2" class="top">
              
                <h3 class="white--text text-center card-title mb-5 ">Registrarse</h3>
                <v-select
                    v-model="registrar.tipoCliente"
                    label="Seleccione el tipo de Cliente"
                    :rules="[ v => !!v || 'Campo es obligatorio']"
                    prepend-inner-icon="mdi-account-box-outline"
                    required
                    autocomplete
                    :items="cliente"
                     >
                     <!-- <option value="natural">Natural</option>
                    <option value="juridico">Jurídico</option> -->
                </v-select>
            </v-col>
            <v-col v-if="tipoCliente === 'natural'" cols="12">
              <v-card
                    :loading="loading"
                    class="mx-auto  my-12 card-top rounded-lg"
                    max-width="850"
                    >
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="6"
                      md="12"
                      sm="12"
                    >
                        <v-text-field
                        label="Primer Nombre"
                        prepend-inner-icon="mdi-account"
                        v-model="registrar.primerNombre"
                        :rules="nombreRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        label="Primer Apellido"
                        prepend-inner-icon="mdi-account"
                        v-model="registrar.primerApellido"
                        :rules="apellidoRules"
                        required
                      ></v-text-field>
                      <v-select
                          :items="idIdentificacionTipo"
                          :rules="[v => !!v || 'Campo Obligatorio']"
                          label="Tipo de Identificación"
                          prepend-inner-icon="mdi-account-box-outline"
                          required
                        ></v-select>
                      <!-- <v-checkbox v-model="checkbox">
                        <template v-slot:label>
                            <div>
                        <p> Al crear una cuenta, acepta los Términos, condiciones y la Política de privacidad de Nic.ni</p>
                            </div>
                        </template>
                        </v-checkbox> -->
                    </v-col>
                    <v-col cols="12" lg="6" md="12">
                        <v-text-field
                          label="Segundo Nombre"
                          prepend-inner-icon="mdi-account"
                          v-model="registrar.segundoNombre"
                          :rules="segundonombreRules"
                          required
                      ></v-text-field>
                      <v-text-field
                          label="Segundo Apellido"
                          prepend-inner-icon="mdi-account"
                          v-model="registrar.segundoApellido"
                          :rules="apellidoRules"
                          required
                      ></v-text-field>
                      <v-text-field
                        label="Identificación"
                        prepend-inner-icon="mdi-account-box-outline"
                        v-model="registrar.identifiacion"
                        :rules="identifiacionRules"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
              <v-card 
                    :loading="loading"
                    class="mx-auto  my-12 card-top rounded-lg"
                    max-width="850">
                <v-container>
                  <v-row>
                    <v-col cols="12" lg="6" md="12" sm="12">
                        <v-select
                          :items="idClienteActividad"
                          :rules="[v => !!v || 'Campo Obligatorio']"
                          label="Actividad"
                          prepend-inner-icon="mdi-clipboard"
                          required
                        ></v-select>
                      <v-text-field
                        label="Correo"
                        prepend-inner-icon="mdi-mail"
                        v-model="registrar.idCorreoTipo"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                      <v-select
                      :items="registrar.idPais"
                      :rules="[v => !!v || 'Campo Obligatorio']"
                      label="País"
                      prepend-inner-icon="mdi-font-awesome"
                      required
                    ></v-select> 
                    <v-text-field
                        v-model="registrar.provincia"
                        label="Provincia"
                        prepend-inner-icon="mdi-city"
                        :rules="provinciaRules"
                        required
                      ></v-text-field>
                      <v-text-field
                          prepend-inner-icon="mdi-lock"
                          v-model="registrar.password" 
                          :rules="passwordRules" 
                          type="password" required
                          label="Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6" lg="6" md="12">
                        <v-text-field
                          v-model="registrar.idTelefonoTipo"
                          type="number"
                          prepend-inner-icon="mdi-phone"
                          label="Teléfono"
                          :rules="phoneRules"
                          required
                        ></v-text-field>
                        <v-text-field
                        v-model="registrar.ciudad"
                        label="Ciudad"
                        prepend-inner-icon="mdi-city"
                        :rules="ciudadRules"
                        required
                      ></v-text-field>
                      <v-text-field
                          v-model="registrar.codigoPostal"
                          type="number"
                          prepend-inner-icon="mdi-mailbox"
                          label="Código Postal"
                          :rules="postalRules"
                          required
                        ></v-text-field>
                        <v-text-field
                        v-model="registrar.direccion"
                        label="Dirección"
                        prepend-inner-icon="mdi-map-marker"
                        :rules="direccionRules"
                        required
                      ></v-text-field>
                      <v-text-field
                          prepend-inner-icon="mdi-lock"
                          v-model="confirmarPassword" 
                          :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
                          type="password" required
                          label="Confirmar Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-btn
                            class="rounded-pill text-capitalize"
                            type="submit"
                            >
                            crear cuenta
                          </v-btn>
                          <!-- {{registrar}} -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-col>
            <v-col v-else-if="tipoCliente === 'juridico'" cols="12">
                <v-card
                    :loading="loading"
                    class="mx-auto  my-12 card-top rounded-lg"
                    max-width="850"
                    >
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="6"
                      md="12"
                      sm="12"
                    >
                    <v-text-field
                        label="Razón Social"
                        prepend-inner-icon="mdi-domain"
                        v-model="registrar.razonSocial"
                        :rules="[v => !!v || 'Campo es obligatorio',]"
                        required
                      ></v-text-field>
                      <v-select
                        label="Clasificación"
                        prepend-inner-icon="mdi-file-account"
                        v-model="registrar.clasificacion"
                        :rules="[v => !!v || 'Campo es obligatorio',]"
                        required
                      ></v-select>
                      <v-select
                        label="Actividad"
                        prepend-inner-icon="mdi-briefcase"
                        v-model="registrar.actividad"
                        :rules="[v => !!v || 'Campo es obligatorio',]"
                        required
                      ></v-select>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      md="12"
                      sm="12"
                      >
                      <v-text-field
                        label="Correo"
                        prepend-inner-icon="mdi-mail"
                        v-model="registrar.idCorreoTipo"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                      <v-select
                      :items="registrar.idPais"
                      :rules="[v => !!v || 'Campo Obligatorio']"
                      label="País"
                      prepend-inner-icon="mdi-font-awesome"
                      required
                    ></v-select> 
                      <v-text-field
                        v-model="registrar.provincia"
                        label="Provincia"
                        prepend-inner-icon="mdi-city"
                        :rules="provinciaRules"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                </v-card>
                <v-card
                    :loading="loading"
                    class="mx-auto  my-12 card-top rounded-lg"
                    max-width="850"
                    >
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="6"
                      md="12"
                      sm="12"
                    >
                    <v-text-field
                        v-model="registrar.direccion"
                        label="Dirección"
                        prepend-inner-icon="mdi-map-marker"
                        :rules="direccionRules"
                        required
                      ></v-text-field>
                        <v-text-field
                        v-model="registrar.siglas"
                        label="Siglas"
                        prepend-inner-icon="mdi-spellcheck"
                        :rules="[v => !!v || 'Campo es obligatorio',]"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="registrar.ruc"
                        label="RUC"
                        prepend-inner-icon="mdi-counter"
                        :rules="[v => !!v || 'Campo es obligatorio',]"
                        required
                      ></v-text-field>
                      <v-text-field
                          prepend-inner-icon="mdi-lock"
                          v-model="registrar.password" 
                          :rules="passwordRules" 
                          type="password" required
                          label="Contraseña"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="6"
                      md="12"
                      sm="12"
                    >
                    <v-text-field
                          v-model="registrar.idTelefonoTipo"
                          type="number"
                          prepend-inner-icon="mdi-phone"
                          label="Teléfono"
                          
                          :rules="phoneRules"
                          required
                        ></v-text-field>
                        <v-text-field
                        v-model="registrar.ciudad"
                        label="Ciudad"
                        prepend-inner-icon="mdi-city"
                        :rules="ciudadRules"
                        required
                      ></v-text-field>
                      <v-text-field
                          v-model="registrar.codigoPostal"
                          type="number"
                          prepend-inner-icon="mdi-mailbox"
                          label="Código Postal"
                          :rules="postalRules"
                          required
                        ></v-text-field>
                        <v-text-field
                          prepend-inner-icon="mdi-lock"
                          v-model="confirmarPassword" 
                          :rules="confirmPasswordRules.concat(passwordConfirmationRule)" 
                          type="password" required
                          label="Confirmar Contraseña"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
  </v-form>
  </v-img>
  </section>
</template>
<script>

import axios from 'axios'
import {Global} from '../Global'

export default {
 
  data: () => ({
    submited: false,
    checkbox: false,
    loading: false,
    selection: 1,
    valid: true,
    registrar: {
        clientenatural:{
          idClienteActividad:'',
          idPais:'',
          provincia:'',
          ciudad:'',
          codigoPostal:'',
          persona:{
             primerNombre: '',
             segundoNombre:'',
             primerApellido:'',
             segundoApellido: '',
             direccion:'',
             personacorreo:[
               {
                 idCorreoTipo:'',
                 correo:''
               }
             ],
             personaIdentificacion:[
              {
              idIdentificacionTipo:'',
               identificacion:''
              }
             ],
             personatelefono: [
               {
                 idTelefonoTipo: '',
                 numero:'',
                 esPrincipal: true,
               }
             ],
             
          }
        },
        usuario:{
          password:'',
          confirmarPassword:'',
          idPersona:'',
          usuario: '',
          correo: ''
        },
        clientejuridico:{
          razonSocial:'',
          clasificacion:'',
          actividad:'',
          idCorreoTipo:'',
          idPais:'',
          provincia:'',
          direccion:'',
          siglas:'',
          ruc:'',
          idTelefonoTipo:'',
          ciudad:'',
          codigoPostal:'',
          password:'',
          confirmarPassword:''
        }
      },
          cliente:['Natural', 'Jurídico'],
         tipoCliente: 'natural',
        
     postalRules:[ v => !!v || 'Campo es obligatorio',],
      phoneRules:[ 
          v => !!v || 'Campo es obligatorio',
        ],
      direccionRules:[  v => !!v || 'Campo es obligatorio',],
      provinciaRules:[
         v => !!v || 'Campo es obligatorio',
      ],
      ciudadRules:[
        v => !!v || 'Campo es obligatorio',
      ],
      identifiacionRules:[
        v => !!v || 'Identificación es obligatorio',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      apellidoRules:[
        v => !!v || 'Apellido es obligatorio',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      nombreRules: [
        v => !!v || 'Nombre es obligatorio',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      segundonombreRules: [
        v => !!v || 'Nombre es obligatorio',
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
     
      emailRules: [
        v => !!v || 'Correo es obligatorio',
        v => /.+@.+/.test(v) || 'Correo debe ser valido',
      ],
     
       
      // tipoid: [
      //   'Cedula',
      //   'Pasaporte',
        
      // ],
    // actividadCliente: [
    //   'Actividad 1',
    //   'Actividad 2'
    // ],
   
    //   paises: [
    //             { text:'Niacaragua'},
    //             { text: 'Costa Rica'},
    //             { text: 'Honduras'},
    //             { text:'España'},
    //   ],
         passwordRules: [v => !!v || "Contraseña obligatoria"],
        confirmPasswordRules: [v => !!v || "Contraseña obligatoria"] 
       
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      procesar (){
                this.submited = true;
                this.$v.$touch();
                if  (this.$v.$invalid) {
                  return false;
                }
                let config = {
                  headers: {
                    token: Global.token,
                    "Content-Type": "application/json",
                  },
                };
                let parametros = "idClienteActividad="+this.registrar.idClienteActividad +
                                 "&idPais="+this.registrar.idPais +
                                 "&provincia="+this.registrar.provincia +
                                 "&ciudad="+this.registrar.ciudad +
                                 "&codigoPostal="+this.registrar.correo +
                                 "&primerNombre="+this.registrar.primerNombre +
                                 "&segundoNombre="+this.registrar.segundoNombre +
                                 "&primerApellido="+this.registrar.primerApellido +
                                 "&segundoApellido="+this.registrar.segundoApellido +
                                 "&direccion="+this.registrar.direccion +
                                 "&idCorreoTipo="+this.registrar.idCorreoTipo +
                                 "&idTelefonoTipo="+this.registrar.idTelefonoTipo +
                                 "&numero="+this.registrar.numero +
                                 "&password="+this.registrar.password +
                                 "&confirmarPassword="+this.registrar.confirmarPassword +
                                 "&idPersona="+this.registrar.idPersona +
                                 "&usuario="+this.registrar.usuario +
                                 "&correo="+this.registrar.correo +
                // post
                axios.post(Global.url + 'registrar', parametros, config)
                .then( ( response ) => {
                  if(response.status==200)
                  {
                    console.log(response);
                    // document.form.reset();
                    // this.$router.push('/crearusuario?=1');
                  }
                }

                )
                .catch( ( error ) => {
                  console.log(error);
                }

                );
      },
       validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
  
    },
    computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmarPassword || "Contraseña deben coincidir";
    },
   
  }
}
</script>
<style>
.top{
  margin-top: 50px;
  margin-bottom: -40px;
  
}
.fullwith{
    margin-top: -20px;
    margin-bottom: -20px;
}
.card-title{
    font-size: 22px;
    text-align: center !important;
    margin-top: 15px !important;
}
.card-top{
    top: 20px !important;
    margin-bottom: 100px !important;
    background: rgb(0, 56, 145, .63) !important;
   
}
.mdi-account:before {
    content: "\F0004";
    color: #fff;
}
.mdi-lock:before{
    content: "\F033E";
    color: #fff;
}
.mdi-mail:before {
    content: "\F0EBB";
    color: #fff;
}
.mdi-account-box-outline:before{
    content: "\F0007";
    color: #fff;
}
.mdi-clipboard:before{
   content: "\F0147";
   color: #fff;
}
.mdi-font-awesome:before{
  content: "\F003A";
  color: #fff;
}
.mdi-city::before {
    content: "\F0146";
    color: #fff;
}
.mdi-phone::before {
    content: "\F03F2";
    color: #fff;
}
.mdi-mailbox::before {
    content: "\F06EE";
    color: #fff;
}
.mdi-map-marker::before {
    content: "\F034E";
    color: #fff;
}
.mdi-domain::before {
    content: "\F01D7";
    color: #fff;
}
.mdi-file-account::before {
    content: "\F073B";
    color: #fff;
}
.mdi-briefcase::before {
    content: "\F00D6";
    color: #fff;
}
.mdi-spellcheck::before {
    content: "\F04C6";
    color: #fff;
}
.mdi-counter::before {
    content: "\F0199";
     color: #fff;
}
.v-application a{
  text-decoration: none !important;
}
</style>