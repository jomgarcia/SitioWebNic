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
        <h3 class="white--text card-title mb-5">Registrarse</h3>
          <v-text-field
            label="Correo"
            prepend-inner-icon="mdi-mail"
          ></v-text-field>
          <v-text-field
            label="Nombre Usuario"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
           <v-text-field
            label="Contaseña"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
           <v-text-field
            label="Confirmar Contaseña"
            prepend-inner-icon="mdi-lock"
          ></v-text-field>
          <v-checkbox v-model="checkbox">
            <template v-slot:label>
                <div>
             <p> Al crear una cuenta, acepta los Términos, condiciones y la Política de privacidad de Nic.ni</p>
                </div>
            </template>
            </v-checkbox>
            <div class="text-right">
                <v-btn
               class="rounded-pill text-capitalize"
                >
                 crear cuenta
                </v-btn>
            </div>
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
    top: 20px;
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
.v-application a{
  text-decoration: none !important;
}
</style>