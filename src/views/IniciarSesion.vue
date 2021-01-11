
<template>
  <section>
      <v-img
      class="fullwith"
        :height="$vuetify.breakpoint.smAndUp ? '100vh' : '100vh'"
        gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .10)"
        src="../assets/img/iniciar-sesion.png"
      >
       <v-container>
         <v-row>
           <v-col cols="12">
            <v-card
              :loading="loading"
              class="mx-auto my-12 card-top rounded-lg"
              max-width="374"
              >
           <FlashMessage :position="'right bottom'"></FlashMessage>
          <v-form @submit.prevent="procesar(usuario)">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                lg="12"
                md="10"
                sm="10"
              >
              <h3 class="white--text card-title mb-10">Iniciar Sesión</h3>
                <v-text-field
                  label="Correo"
                  prepend-inner-icon="mdi-account"
                  v-model="usuario.email"
                  :rules="emailRules"
                
                  required
                ></v-text-field>
                <v-text-field
                  type="password"
                  name="password"
                  label="Contaseña"
                  prepend-inner-icon="mdi-lock"
                  v-model="usuario.password"
                  :rules="passRules"
                ></v-text-field>
                <v-checkbox v-model="checkbox">
                  <template v-slot:label>
                      <div>
                    Recuerdame
                      </div>
                  </template>
                  </v-checkbox>
                  <div class="text-center">
                      <v-btn
                      class="rounded-pill text-capitalize"
                      type="submit"
                      value="enviar"
                      >
                      Iniciar Sesión
                      </v-btn>
                  </div>
                  <router-link :to="{name: 'crearusuario'}" target="_blank"><p class="text-center mt-5">¿No tienes una cuenta? Crear cuenta</p></router-link>
                  <router-link :to="{ name: 'recuperarcontraseña'}" target="_blank"><p  class="text-center mt-2">Olvidó su contraseña?</p></router-link>
                 {{ usuario }}
              </v-col>
            </v-row>
          </v-container>
        </v-form>
            </v-card>

           </v-col>
         </v-row>
       </v-container>
      </v-img>
  </section>
</template>
<script>
import axios from 'axios'
import {Global} from '../Global'
import Vue from 'vue';
import FlashMessage from '@smartweb/vue-flash-message';
Vue.use(FlashMessage);

export default {

    data: () => ({
     
      usuario:{
          email: '',
          password:''
      },
        checkbox: false,
      loading: false,
      selection: 1,
      submited: false,
       valid: false,
      nombre: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Nombre es requerido',
        // v => v.length <= 10 || 'El nombre debe tener menos de 10 caracteres',
      ],
     
      emailRules: [
        v => !!v || 'Correo es requerido',
        v => /.+@.+/.test(v) || 'Correo debe ser valido',
      ],
     
      passRules: [
          v => !!v || 'Escribre tu contraseña',
      ]
    }),

    methods: {
      // reserve () {
      //   this.loading = true

      //   setTimeout(() => (this.loading = false), 2000)
      // },
      procesar (){
        this.submited = true;
        this.$v.$touch();
        if  (this.$v.$invalid) {
          return false;
        }
      let config = {
        headers: {
          "Content-Type":"application/json",
        },
      };
      axios
      .post(Global.url + 'usuario',this.usuario, config)
      .then ( (response) => {
        if(response.status ==200)
        {
         console.log(response);
        }
      })
      .catch( (error) => {
        this.flashMessage.show({status: 'error', title: 'Mi aplicación', message:'Los datos no son válidos' +error})
        document.from.reset();

      });
      }
    },
}
</script>
<style>
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
    top: 80px;
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
.v-application a{
  text-decoration: none !important;
}
</style>