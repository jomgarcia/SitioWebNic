<template>
  <section>
      <v-container>
          <v-row>
              <!-- aca inicia todo el formulario -->
              <v-col
                cols="12"
                lg="6"
                md="12"
              >
              <h1 class="display-1">Formulario de Contacto</h1>
                <v-card-subtitle>Campos marcados con * son requeridos</v-card-subtitle>

               <v-card-subtitle>Nombres *</v-card-subtitle>
               <v-text-field
               color="indigo darken-4"
               v-model="nombre"
                :error-messages="errorMessages"
                filled
                clearable
                required
                :rules="nameRules"
            ></v-text-field>
            <v-card-subtitle>Apellidos *</v-card-subtitle>
            <v-text-field
               color="indigo darken-4"
               v-model="apellido"
                filled
                clearable
                required
                :rules="apellidoRules"
            ></v-text-field>
            <v-card-subtitle>Correo *</v-card-subtitle>
            <v-text-field
               color="indigo darken-4"
               v-model="email"
                filled
                clearable
                required
                :rules="emailRules"
            ></v-text-field>
            <v-card-subtitle>Mensaje *</v-card-subtitle>
             <v-textarea
                v-model="mensaje"
                :rules="mensajeRules"
                color="indigo darken-4"
                name="input-7-1"
                filled
                auto-grow
             ></v-textarea>
             <v-btn
                 color="blue darken-4"
                class="text-capitalize white--text"
                x-large
                @click="submit"
                >
                 Enviar
                </v-btn>
              </v-col> 
              <!-- aqui termina formulario -->
              <v-col cols="12"
                    lg="6"
                    md="12"
                    sm="12"
              >
              <h1 class="display-1 titulo-mapa text-left mb-10">Mapa de Sitio</h1>
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7168079529893!2d-86.26821007790747!3d12.131518580648443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f7155e45947c2c5%3A0x8eaf963e036e7444!2sNational%20University%20of%20Engineering%20(UNI)!5e0!3m2!1sen!2sni!4v1605127943955!5m2!1sen!2sni" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
               <h1 class="display-1 mt-4 titulo-mapa">Contáctenos</h1>
               <v-simple-table
               class="mt-5"
                 hide-default-header
                 hide-default-footer
                
               >
              <template v-slot:default> 
                <tbody>
                  <tr
                    v-for="item in datosOficina"
                    :key="item.titulo"
                  >
                    <td>{{ item.titulo }}</td>
                    <td>{{ item.info }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
              </v-col>
          </v-row>
      </v-container>
  </section>
</template>

<script>
export default {
    data: () => ({
     
       datosOficina: [
          {
            titulo: 'Teléfono de oficina',
            info: '(505) 2278-3141',
          },
          {
            titulo: 'Teléfono de Cobranza',
            info: '(505) 2270-0958',
          },
          {
            titulo: 'Nuestro correo electrónico',
            info: 'info@nic.ni',
          },
          // {
          //   titulo: 'Cobranza',
          //   info: 'cobranza@nic.ni',
          // },
          // {
          //   titulo: 'Área Técnica',
          //   info: 'tech@nic.ni',
          // },
          // {
          //   titulo: 'Administración',
          //   info: 'admni@nic.ni',
          // },
        ],

        checkbox: false,
      loading: false,
      selection: 1,

       valid: false,
      nombre: '',
      apellido: '',
      mensaje: '',
      errorMessages: '',
      formHasErrors: false,
      mensajeRules: [
        v => !!v || 'Mensaje es requerido',
        // v => v.length <= 10 || 'El nombre debe tener menos de 10 caracteres',
      ],
      nameRules: [
        v => !!v || 'Nombre es requerido',
        // v => v.length <= 10 || 'El nombre debe tener menos de 10 caracteres',
      ],
      apellidoRules: [
        v => !!v || 'Apelldio es requerido',
        // v => v.length <= 10 || 'El nombre debe tener menos de 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Correo es requerido',
        v => /.+@.+/.test(v) || 'Correo debe ser valido',
      ],
    }),
     computed:{
        form(){
            return {
                nombre: this.nombre,
                apellido:this.apellido,
                mensaje:this.mensaje,
                email:this.email,
            }
        },
    },
    watch:{
        nombre() {
            this.errorMessages = ''
        },
    },

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    resetForm(){
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.fomr).forEach(f =>{
            this.$refs[f].reset()
        })

    },
    submit (){
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
            if(!this.form[f]) this.formHasErrors = true
            
            this.$refs[f].validate(true)
        })
    },
    },
    
}
</script>
<style>

.mdi-close::before {
    content: "\F0156";
    color: #000;
}
@media (max-width: 725px){
    iframe{
        width: 350px !important;
        height: 250px !important;
    }
    .titulo-mapa{
      margin-top: 30px !important;
    }
}
</style>