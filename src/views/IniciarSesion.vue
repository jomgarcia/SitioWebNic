<template>
  <section>
      <v-img
      class="fullwith"
        :height="$vuetify.breakpoint.smAndUp ? '100vh' : '100vh'"
        gradient="to top, rgba(32, 32, 30, .85), rgba(32, 32, 30, .10)"
        src="../assets/img/iniciar-sesion.png"
      >
      <v-card
        :loading="loading"
        class="mx-auto my-12 card-top rounded-lg"
        max-width="374"
        >
     
    <v-form>
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
            label="Usuario"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
           <v-text-field
            label="Contaseña"
            prepend-inner-icon="mdi-lock"
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
                >
                 Iniciar Sesión
                </v-btn>
            </div>
            <router-link :to="{name: 'crearusuario'}" target="_blank"><p class="text-center mt-5">¿No tienes una cuenta? Crear cuenta</p></router-link>
            <a href=""><p  class="text-center mt-2">Olvidó su contraseña?</p></a>
            
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-card>
</v-img>
</section>
</template>
<script>
export default {
    data: () => ({
        checkbox: false,
      loading: false,
      selection: 1,

       valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
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